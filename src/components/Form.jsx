import { useForm } from "react-hook-form";
export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      data-aos="fade-up"
      className="Form flex flex-col items-center pt-8 py-64 gap-y-4 "
    >
      <div className="uppercase font-bold text-3xl">Contact Us</div>
      <div className="md:w-[80vh] min-[320px]:w-[40vh] min-[425px]:w-[50vh]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <div className="flex flex-col">
            <label htmlFor="">Nama</label>
            <input
              {...register("nama", { required: true })}
              aria-invalid={errors.nama ? "true" : "false"}
              className={
                errors.nama
                  ? "border px-2 py-1 focus:outline-red-400"
                  : "border px-2 py-1 focus:outline-blue-400"
              }
            />
            {errors.nama?.type === "required" && (
              <p role="alert" className="text-red-400">
                Field is required
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className={
                errors.email
                  ? "border px-2 py-1 focus:outline-red-400"
                  : "border px-2 py-1 focus:outline-blue-400"
              }
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-400">
                Field is required
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Message</label>
            <textarea
              className={
                errors.message
                  ? "border px-2 py-1 focus:outline-red-400"
                  : "border px-2 py-1 focus:outline-blue-400"
              }
              {...register("message", { required: true })}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message?.type === "required" && (
              <p role="alert" className="text-red-400">
                Field is required
              </p>
            )}
          </div>

          <input type="submit" className="bg-blue-400 py-2 mt-4 text-white" />
        </form>
      </div>
    </div>
  );
}
