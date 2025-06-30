import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FormCreateCourse } from "./FormCreateCourse"


export default function Header() {
    return (
        <div className="my-4 mx-6 border rounded-lg bg-white">
            <div className="flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl">Teacher mode</h1>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            Crear Curso
                            <Plus />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Crea un nuevo curso</DialogTitle>

                            <FormCreateCourse />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
