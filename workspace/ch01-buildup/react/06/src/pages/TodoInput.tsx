import { useState, type KeyboardEvent } from "react";

interface TodoInputProps{
  addItem: (title: string) => void;
}

    function TodoInput({ addItem }: TodoInputProps){
      
      const [title, setTitle] = useState('');

      // 추가 버튼 클릭 이벤트 핸들러
      const handleAdd = () => {
        console.log('추가 버튼 클릭');
        addItem(title);
        setTitle('');
      };

      // 엔터 이벤트 핸들러
      const handleAddKeydown = (event: KeyboardEvent) => {
        console.log('keydown', event);
        if(event.key === 'Enter') handleAdd();
      };

      return (
        <div className="todoinput">
          <input type="text" autoFocus value={title} onChange={ (e) => setTitle(e.target.value) } onKeyDown={ handleAddKeydown } />
          <button type="button" onClick={ handleAdd }>추가</button>
        </div>
      );
    }

    export default TodoInput;