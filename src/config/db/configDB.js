import moongose from 'mongoose';

const connectDB = async () => {
    try {
        await moongose.connect('mongodb+srv://admin:hungpham892002@cluster0.oiizfff.mongodb.net/mydb');
        console.log('connect successfully');
    } catch (error) {
        console.log(error);
    }


};

export default connectDB;