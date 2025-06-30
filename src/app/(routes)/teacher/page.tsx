import { currentUser } from "@clerk/nextjs/server"
import Header from "./components/Header/Header";

export default async function TeacherPage() {
    const user = await currentUser();
    
    if (!user) {
        return <p>Not signed in</p>
    }

    return <div>
        <Header />
    </div>
}
