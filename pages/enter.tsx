import useMutation from "libs/client/useMutation";
import { useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { cls } from "../libs/client/utils";

interface EnterFormProps {
  email?: string;
  phone?: string;
  token?: number;
}
interface EnterFormErrors<T> {
  email?: T;
  phone?: T;
  token?: T;
}
type Nav = "email" | "phone";

interface MutationResult {
  success: boolean;
}

export default function Enter() {
  const [method, setMethod] = useState<Nav>("email");
  const [enter, { data, loading, error }] =
    useMutation<MutationResult>("/api/user/enter");
  const [
    confirmToken,
    { data: tokenData, loading: tokenLoading, error: tokenError },
  ] = useMutation<MutationResult>("/api/user/confirm");
  const {
    reset,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterFormProps>();

  const onNavClick = (nav: Nav) => {
    reset();
    setMethod(nav);
    clearErrors(["email", "phone"]);
  };
  const onValid: SubmitHandler<EnterFormProps> = async (formData) => {
    enter(formData);
    reset();
  };

  const onInValid = (errors: EnterFormErrors<FieldError>) => {
    console.log(error);
  };

  const onConfirmValid: SubmitHandler<EnterFormProps> = async (token) => {
    confirmToken(token);
    reset();
  };
  const toggleButtonCss = (buttonType: string) =>
    cls(
      "border-b-4 pb-4 font-bold transition-colors focus:outline-orange-500",
      method === buttonType
        ? `  border-b-orange-500  text-orange-500`
        : ` border-b-transparent`
    );

  return (
    <div className="px-4 pt-16">
      <h3 className="text-center text-2xl font-bold">Enter to Carrot</h3>
      <div>
        {!data?.success ? (
          <>
            {" "}
            <div className="flex  flex-col items-center">
              <h5 className="mt-8 text-sm text-gray-500">Enter using:</h5>
              <div className="mt-4 grid w-full grid-cols-2 border-b  text-lg text-gray-500 ">
                <button
                  onClick={() => onNavClick("email")}
                  className={toggleButtonCss("email")}
                >
                  Email
                </button>
                <button
                  onClick={() => onNavClick("phone")}
                  className={toggleButtonCss("phone")}
                >
                  Phone
                </button>
              </div>
            </div>
            <form
              className="mt-8 flex flex-col"
              onSubmit={handleSubmit(onValid, onInValid)}
            >
              <label className="mb-2">
                {method === "email" ? "Email address" : null}
                {method === "phone" ? "Phone number" : null}
              </label>
              <div>
                {method === "email" && (
                  <input
                    {...register("email", {
                      required: "Email is required",
                      validate: {
                        isEmail: (v) => v?.includes("@") || "Not email form",
                      },
                    })}
                    placeholder="Input your email"
                    className="text-md input w-full px-2 py-2 outline-none placeholder:text-gray-500 "
                  />
                )}
                {method === "phone" && (
                  <div className="flex">
                    <span className="flex cursor-pointer items-center rounded-l-md border border-r-0 bg-gray-100 px-3 text-sm  text-gray-600">
                      +82
                    </span>
                    <input
                      {...register("phone", {
                        required: "Phone number is required",
                        validate: {
                          isNumber: (v) =>
                            !isNaN(parseInt(v + "")) || "Only number",
                        },
                      })}
                      placeholder="Input your phone"
                      required
                      className="text-md input w-full rounded-r-md rounded-l-none px-2 py-2  placeholder:text-gray-500 "
                    />
                  </div>
                )}
              </div>
              <div className="py-2 text-red-500">{errors[method]?.message}</div>
              <button type="submit" className="button my-6 py-2 hover:ring-2">
                {loading
                  ? "loading..."
                  : method === "email"
                  ? "Get login link"
                  : "Get one-time password"}
              </button>
            </form>
          </>
        ) : (
          <>
            <form
              className="mt-8 flex flex-col"
              onSubmit={handleSubmit(onConfirmValid)}
            >
              <label className="mb-2">Confirmation Token</label>
              <div>
                <input
                  {...register("token", {
                    required: "Token is required",
                    validate: {
                      isNumber: (v: any) =>
                        typeof (v - 0) == "number" || "Not token form",
                    },
                  })}
                  type="number"
                  placeholder="Input your token"
                  className="text-md input w-full px-2 py-2 outline-none placeholder:text-gray-500 "
                />
              </div>
              <div className="py-2 text-red-500">
                {errors["token"]?.message}
              </div>
              <button type="submit" className="button my-6 py-2 hover:ring-2">
                {tokenLoading ? "loading..." : "Confirm Token"}
              </button>
            </form>
          </>
        )}
        <div>
          <div className="relative mt-4">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center ">
              <span className="bg-white px-2">Or enter with</span>
            </div>
          </div>
          <div className="mt-4 grid w-full grid-cols-2 justify-between gap-3 ">
            <button className="flex items-center  justify-center rounded-md border py-4  shadow outline-orange-500 hover:bg-gray-100 focus:bg-gray-200">
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="flex items-center justify-center rounded-md border py-4 shadow outline-orange-500 hover:bg-gray-100 focus:bg-gray-200">
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
