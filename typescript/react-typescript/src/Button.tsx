import React, { useState } from "react";

interface ButtonProps {
  onClick(): void;
  children: string;
}
interface User {
  name: string;
  age: number;
}

export default function Button(props: ButtonProps) {
  const [name, setName] = useState("");
  // 문자열 외 값을 useState에 넣고 싶은 경우, 제너릭 지정
  const [list, setList] = useState<string[]>([]);
  const [userList, setUserList] = useState<Array<User>>([]);

  return <button onClick={props.onClick}>{props.children}</button>;
}
