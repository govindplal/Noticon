"use client"
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/clerk-react';
import { useMutation } from 'convex/react';



const Documents = () => {
  const {toast} = useToast()
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title : "Untitled"});

    toast({
      description: "New note created",
    })
  }
  return (
    <div>
      Document page
      <div>
        <Button onClick={onCreate}>Create Page</Button>
      </div>
    </div>
  )
}

export default Documents
