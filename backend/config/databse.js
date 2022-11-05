import { connect } from "mongoose";
 const connectDatabase = async () =>{
    const URL='mongodb+srv://Project:123890@cluster1.gscpy0n.mongodb.net/?retryWrites=true&w=majority';
    try {
        await connect(URL);
        console.log("Database connected successfully")
    } catch (error) {
        
        console.log(error)
    }
}
export default connectDatabase;
