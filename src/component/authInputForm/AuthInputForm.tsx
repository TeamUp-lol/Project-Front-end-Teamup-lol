import {
  AuthFormInputItem,
  AuthInputFormProps,
} from './AuthInputFormInterfaces';

const AuthInputForm = ({
  isLoginPage,
  data,
}: AuthInputFormProps): JSX.Element => {
  return (
    <>
      <header>
        <h1 className="my-12 text-2xl font-bold">
          {isLoginPage ? '로그인' : '회원가입'}
        </h1>
      </header>
      {data.map((item: AuthFormInputItem) => {
        return (
          <div key={item.id} className="my-2 w-10/12 ">
            <div className="flex flex-col lg:flex-row mb-2 pl-4">
              <span className="mr-2 text-slate-600">{item.title}</span>
              <span className="text-red-600 text-xs lg:text-sm">
                {item.errorMsg}
              </span>
            </div>
            <div className="flex mx-auto">
              <input
                type={item.type}
                name={item.title}
                className={`${
                  item.button ? 'w-8/12 ' : 'w-10/12 lg:w-9/12 '
                }  ml-8 mb-4 p-2 border-b border-solid border-slate-300`}
              />
              {item.button ? (
                <button
                  disabled
                  className="disabled:opacity-50 ml-4 p-1 h-8 border border-slate-400 rounded-md text-slate-400 text-xs lg:text-sm"
                >
                  {item.validate}
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AuthInputForm;
