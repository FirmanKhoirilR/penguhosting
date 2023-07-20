import { useGlobalContext } from "../hooks/StateContext";
import { Loading } from "../components";
import { AiOutlineCloudUpload, AiOutlineUserAdd, AiTwotoneDelete } from "react-icons/ai";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { blog } from "../assets";

const CreateBlog = () => {
  const { formCreateBlog, setFormCreateBlog, user, wrongImageType, setWrongImageType }: any = useGlobalContext();

  const queryClient = useQueryClient();

  const blogMutatipn = useMutation((doc: any) => client.create(doc), {
    onMutate: () => {
      queryClient.invalidateQueries("blogQuery");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("blogQuery");

      navigate("/blog");
      //
    },
  });
  const navigate = useNavigate();

  const uploadImage = (e: React.InputHTMLAttributes<HTMLImageElement> | any) => {
    const { type, name } = e.target.files[0];
    // get the type and name only first target

    if (type === "image/png" || type === "image/jpeg" || type === "image/jpg" || type === "svg") {
      // if the type of image is png, jpeg, jpg, and svg continue the above code
      setWrongImageType(false);
      // don't show paragraf error
      setFormCreateBlog({ ...formCreateBlog, loading: true });
      // set loading after upload image
      client.assets
        .upload("image", e.target.files[0], {
          contentType: type,

          filename: name,
        })
        .then((document) => {
          setFormCreateBlog({ ...formCreateBlog, imageAsset: document, loading: false });
          // set imageAsset as document after we ipload it and not show loading state
        })
        .catch((err) => console.log("Console", err));
    } else {
      setWrongImageType(true);
      // show wrong image paragraf
    }
  };

  // format Date for creating the year-month-day time
  function formatDate() {
    const dateObj = new Date(formCreateBlog.date);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  const dates = formatDate();
  const users: any = localStorage.getItem("user");
  const parseUser = JSON.parse(users);

  const saveBlog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // after submit form dont refresh the page
    if (formCreateBlog.title && formCreateBlog.description && formCreateBlog.imageAsset?._id) {
      // if title, description, imageAsset id is exist
      const doc = {
        _type: "pin",
        createdAt: dates,
        title: formCreateBlog?.title as string | undefined,
        description: formCreateBlog.description as string | undefined,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: formCreateBlog.imageAsset?._id,
          },
        },
        userId: user?._id,
        postedBy: {
          _type: "postedBy",
          _ref: user?._id,
        },
      };
      // trigger and fecthing new blog in sanity document
      blogMutatipn.mutate(doc);
    }
  };

  return (
    <form onSubmit={saveBlog} className="bg-white items-center md:flex-row flex-col-reverse justify-around py-10 flex gap-2">
      <div>
        <div className="bg-slate-100 w-full rounded-lg h-[300px] justify-center flex flex-col items-center gap-10">
          <div className="flex flex-col  items-center">
            {formCreateBlog.loading && <Loading />}
            {wrongImageType && <div className="text-red-500 tracking-wide font-semibold">Wrong image type</div>}
            {!formCreateBlog.imageAsset ? (
              <label>
                <div className="flex flex-col px-4 items-center">
                  <div className="flex justify-center items-center flex-col ">
                    <p>
                      <AiOutlineCloudUpload size={25} />
                    </p>
                    <p className="text-lg">Click to Upload</p>
                  </div>
                  <p className="mt-20 text-gray-600 text-sm text-center">use high-quality JPG, SVG, JPEG, or PNG less than 20 MB</p>
                </div>
                <input type="file" required onChange={uploadImage} className="w-0 h-0" name="upload-image" />
              </label>
            ) : (
              <div className="relative h-full">
                <img src={formCreateBlog.imageAsset?.url} loading="lazy" alt="background" className="w-full  rounded-lg h-[300px]" />
                <button
                  type="button"
                  name="buttonDelete"
                  aria-label="buttonDelete"
                  className="absolute right-4 bottom-3 p-2 bg-white hover:bg-blue-500 rounded-full"
                  onClick={() => setFormCreateBlog({ ...formCreateBlog, imageAsset: null })}
                >
                  <AiTwotoneDelete size={25} />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 min-w-[350px]  max-w-[700px]">
          <div className="flex flex-col font-semibold gap-3">
            <label className="text-sm text-black/70">Title</label>
            <input
              type="text"
              placeholder="Title Blog"
              required
              value={formCreateBlog.title}
              onChange={(e) => setFormCreateBlog({ ...formCreateBlog, title: e.target.value })}
              className="font-normal py-2 px-4 outline-none bg-blue-100 rounded-lg"
            />
          </div>

          {users && user && (
            <div className="w-[450px] my-2 flex items-center rounded-xl gap-2 bg-blue-100 p-1">
              {user ? (
                <>
                  <img loading="lazy" src={user?.image} alt={user?.userName} height={40} width={40} className="rounded-full" />
                  <p className="font-semibold">{user.userName}</p>
                </>
              ) : (
                <>
                  <img loading="lazy" src={parseUser?.picture} alt={parseUser?.name} height={40} width={40} className="rounded-full" />
                  <p className="font-semibold">{parseUser.name}</p>
                </>
              )}
            </div>
          )}

          <div className="flex flex-col font-semibold gap-3">
            <label className="text-sm text-black/70">Description</label>
            <textarea
              rows={5}
              placeholder="Description Blog"
              required
              value={formCreateBlog.description}
              onChange={(e) => setFormCreateBlog({ ...formCreateBlog, description: e.target.value })}
              className="font-normal py-2 px-4 outline-none bg-blue-100 rounded-lg"
            ></textarea>
          </div>
          <button type="submit" className="bg-sky-500 text-white hover:bg-sky-600 transition  duration-200 shadow-lg py-4 font-semibold rounded-lg mt-2">
            Submit Blog
          </button>
        </div>
      </div>
      <div className="flex flex-col relative items-center gap-1 md:gap-2">
        <h1 className="text-sky-500 font-bold tracking-tight select-none text-[40px]">Post Blog</h1>
        <img src={blog} alt="adding Blog" className="w-[300px] md:w-[500px] h-[350px]" />
        <div className="p-3 bg-sky-500 text-white rounded-full rotate-[20deg] absolute f;ex items-center  -right-5 top-20 md:right-2">
          <AiOutlineUserAdd size={20} />
        </div>
      </div>
    </form>
  );
};

export default CreateBlog;
