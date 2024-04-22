import { v } from "convex/values";
import {mutation, query} from "./_generated/server";

export const getSidebar = query({
    args: {
        parentDocument: v.optional(v.id("documents"))
    },
    handler: async(ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw new Error("Not authenticated");
        }

        const userId = identity.subject;

        const documents = await ctx.db
        .query("documents")
        .withIndex("by_user_parent", (q) =>
        q
            .eq("userId", userId)
            .eq("parentDocument", args.parentDocument)
        )
        .filter((q) =>
        q.eq(q.field("isArchived"), false)
        )
        .order("desc")
        .collect();

        return documents;
    },
});

export const create = mutation({
    args:{
        title: v.string(),
        parentDocument: v.optional(v.id("documents"))
    },
    handler:async(ctx,args) =>{
        const identity = await ctx.auth.getUserIdentity();
        if (!identity){
            throw new Error("Not Authenticated");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("documents", {
        title: args.title,
        parentDocument: args.parentDocument,
        userId,
        isArchived: false,
        isPublished: false,
    });
    return document;
}
});

export const getById = query({
    args: {documentId: v.id("documents")},
    handler: async (ctx,args)=>{
        const identity = await ctx.auth.getUserIdentity();

        const document = await ctx.db.get(args.documentId);

        if(!document) {
            throw new Error("Not found");
        }

        if(document.isPublished && !document.isArchived) {
            return document;
        }

        if(!identity) {
            throw new Error('Not authenticated');
        }

        const userId = identity.subject;

        if(document.userId !== userId) {
            throw new Error("Unauthorized");
        }

        return document;
    }
});