import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Date, RootState } from "../global/global";

export default function CreateDiary() {
  const dates = useSelector((state: RootState) => state.dates);
  const diaries = useSelector((state: RootState) => state.diaries);
  const history = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!(dateRef.current && titleRef.current && contentRef.current))
      return false;
    const data = {
      id: diaries.length + 1,
      date: dateRef.current.value,
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    dispatch({ type: "DIARY/WRITE", payload: data });
    alert("생성이 완료 되었습니다");
    // UseNavigate Hook은 push메서드가 있는 history 객체가 아닌 함수를 반환함
    // 따라서, 함수를 호출하고(history), state로 값 전달
    history("/date", { state: dateRef.current.value });
  }

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>제목</label>
        <input type="text" placeholder="일기장 제목" ref={titleRef} />
      </div>
      <div className="input_area">
        <label>내용</label>
        <textarea placeholder="일기장 내용" ref={contentRef} />
      </div>
      <div className="input_area">
        <label>Date</label>
        <select ref={dateRef}>
          {dates.map((date: Date) => (
            <option key={date.id} value={date.date}>
              {date.date}
            </option>
          ))}
        </select>
      </div>
      <button>작성</button>
    </form>
  );
}
