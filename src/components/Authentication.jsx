import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Authentication = () => {
  const navigate = useNavigate();
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const [idInstanceDirty, setIdInstanceDirty] = useState(false);
  const [apiTokenInstanceDirty, setApiTokenInstanceDirty] = useState(false);

  const [stateInstance, setStateInstance] = useState(false);

  const [idInstanceError, setIdInstanceError] = useState(
    "Id Instance не может быть пустым"
  );
  const [apiTokenInstanceError, setApiTokenInstanceError] = useState(
    "Api Token Instance не может быть пустым"
  );

  const [requestError, setRequestError] = useState(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState("");

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "idInstance":
        setIdInstanceDirty(true);
        break;
      case "apiTokenInstance":
        setApiTokenInstanceDirty(true);
        break;
    }
  };

  function checkAuthCookie() {
    const authCookie = document.cookie.split(";");
    let obj = {};

    authCookie.forEach((el) => {
      let item = el.trim().split("=");
      obj[item[0]] = `${item[1]}`;
    });

    if (obj.idInstance && obj.apiTokenInstance) {
      setIdInstance((state) => (state = obj.idInstance));
      setApiTokenInstance((state) => (state = obj.apiTokenInstance));
      setIdInstanceDirty(false);
      setIdInstanceError("");
      setApiTokenInstanceDirty(false);
      setApiTokenInstanceError("");
    }
  }

  useEffect(() => {
    checkAuthCookie();
  }, []);

  const idInstanceHandler = (e) => {
    setIdInstance(e.target.value);

    const regInstance = /^\d{10}$/;
    if (!regInstance.test(e.target.value)) {
      setIdInstanceError("Некоректный Id Instance, необходимо 10 цифр.");
    } else {
      setIdInstanceDirty(false);
      setIdInstanceError("");
    }
  };
  const apiTokenInstanceHandler = (e) => {
    setApiTokenInstance(e.target.value);

    const regInstance = /^\S{50}$/;
    if (!regInstance.test(e.target.value)) {
      setApiTokenInstanceError(
        "Некоректный Api Token Instance, необходимо 50 символов."
      );
    } else {
      setApiTokenInstanceDirty(false);
      setApiTokenInstanceError("");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (idInstanceError === "" && apiTokenInstanceError === "") {
      const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

      axios
        .get(url)
        .then((res) => {
          if (res.data.stateInstance === "authorized") {
            setStateInstance(true);
            setRequestError(false);
            setRequestErrorMessage("");
            document.cookie = `idInstance=${idInstance}`;
            document.cookie = `apiTokenInstance=${apiTokenInstance}`;
            navigate("/");
          } else {
            setRequestError(true);
            setRequestErrorMessage(
              `Ваш аккаунт не авторизован на сайте Green-Api`
            );
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setRequestError(true);
            setRequestErrorMessage(
              "Скорее всего вы ввели не вырный Id Instance и/или Api Token Instance"
            );
          }
        });
    } else {
      if (idInstance.length < 10 || idInstance.length > 10) {
        setIdInstanceError("Некоректный Id Instance, необходимо 10 цифр.");
        setIdInstanceDirty(true);
      }
      if (apiTokenInstance < 50 || apiTokenInstance > 50) {
        setApiTokenInstanceError("Некоректный Api Token Instance, необходимо 50 символов.");   
        setApiTokenInstanceDirty(true);
      }
    }
  };

  return (
    <div className="max-w-[700px] w-full min-h-[400px] max-h-[700px] py-7 px-3 bg-green-500 m-auto rounded-lg">
      <h1 className="text-2xl text-center mb-5 mt-3">Войти в чаты</h1>
      <form className="max-w-[100%] m-auto flex justify-center flex-col">
        <div className="flex flex-col max-w-[70%] w-full m-auto">
          <label htmlFor="">
            Введите ваш <strong>Id Instance</strong>:
          </label>
          <input
            onBlur={blurHandler}
            value={idInstance}
            onChange={idInstanceHandler}
            type="text"
            name="idInstance"
            placeholder="Пример: 1101819663"
            className="py-3.5 px-4 mt-2 rounded-lg outline-0"
          />
          {idInstanceDirty && idInstanceError && (
            <div className="text-red-600 mt-2">{idInstanceError}</div>
          )}
        </div>
        <div className="flex flex-col max-w-[70%] w-full mt-7 m-auto">
          <label htmlFor="">
            Введите ваш <strong>Api Token Instance</strong>:
          </label>
          <input
            value={apiTokenInstance}
            onChange={apiTokenInstanceHandler}
            onBlur={blurHandler}
            type="text"
            name="apiTokenInstance"
            placeholder="Пример: 3b5ae2ca..."
            className="py-3.5 px-4 mt-2 rounded-lg outline-0"
          />
          {apiTokenInstanceDirty && apiTokenInstanceError && (
            <div className="text-red-600 mt-2">{apiTokenInstanceError}</div>
          )}
          {requestError && requestErrorMessage && (
            <div>
              <div className="text-red-600 mt-2">{requestErrorMessage}</div>
            </div>
          )}
        </div>
        <div className="flex max-w-[70%] w-full m-auto justify-between items-baseline my-5">
          <button
            className="py-4 px-4 rounded-md border-2 text-white"
            onClick={handlerSubmit}
          >
            Авторизация
          </button>
          <Link
            to="https://green-api.com/"
            target="_blank"
            className="ext-lg border-b-2 border-b-emerald-950 pb-1"
          >
            Регистрация в GREEN API
          </Link>
          {/* <a rel="noreferrer" href="https://green-api.com/" target="_blank" className="text-lg border-b-2 border-b-emerald-950">Регистрация в GREEN API</a> */}
        </div>
      </form>
    </div>
  );
};

export default Authentication;
