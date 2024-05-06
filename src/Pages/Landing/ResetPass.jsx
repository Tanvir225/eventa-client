import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";

const ResetPass = () => {

    //useAuth hook call
    const {passwordReset} = useAuth()

    
    //onsubmit functionality
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value
        passwordReset(email)
        .then((res)=>{
            console.log(res);
            toast.success(`Reset Link send to : ${email}`)
            e.target.reset()
            
        })

    }
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white h-[300px] my-32 mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-600">Password Reset</h1>
      {/* Input fields and the form started */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Your email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>

        <div className="flex justify-between">
                <Link to={"/login"} className="btn bg-sky-500 text-white w-32 hover:bg-black">Login</Link >
                <button className="btn bg-indigo-500 text-white w-32 hover:bg-black">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPass;
