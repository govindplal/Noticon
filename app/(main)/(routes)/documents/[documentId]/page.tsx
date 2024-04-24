"use client"

import Editor from "@/app/_components/editor";
import { Toolbar } from "@/app/_components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react";

interface DocumentIdPageProps{
    params: {
        documentId: Id<"documents">;
    };
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    if(document === undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if(document === null) {
        return (
            <div>Not found</div>
        )
    }

  return (
    <div className="pb-40">
        <div className="h-[10vh]"/>
      <div className="md:mac-w-3xl lg:max-w-4xl ml-[100px] mr-auto">
        <Toolbar initialData={document} />
      </div>
      <div className="md:mac-w-3xl lg:max-w-4xl ml-[45px] mr-auto">
        <Editor/>
      </div>
    </div>
  )
}

export default DocumentIdPage
