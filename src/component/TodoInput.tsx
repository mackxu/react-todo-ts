import React, { useRef } from 'react'

import { ITodo } from '../typings'

type InputProps = {
  addTodo: (todo: ITodo) => void
}

const TodoInput = ({ addTodo }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 告知编译器此值不可能为空值（null和undefined）
    const text = inputRef.current!.value.trim();
    if (text) {
      addTodo({
        id: Date.now(),
        content: text,
        completed: false,
      })
      // 清空输入
      inputRef.current!.value = ''
    }
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>添加</button>
    </div>
  )
}

export default TodoInput
