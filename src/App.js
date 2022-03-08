import React, {useState, useEffect} from 'react';
import './App.scss';
import {list1, list2} from './List.js';

function App() {

    const [type, setType] = useState('1');
    const [list, setList] = useState([]);

    useEffect(() => {
        switch (type) {
            case '1':
                setList(list1);
                return;
            case '2':
                setList(list2);
                return;
            default:
                return;
        }
    }, [type])

    return (
        <div className="App">

            <div className='Header'>
                <h1>라이브러리</h1>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value='1'>1번타입</option>
                    <option value='2'>2번타입</option>
                </select>
            </div>

            <div className='Content'>
                <table>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>링크</th>
                    </tr>
                    {
                        list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.category}</td>
                                    <td className='Title'>{item.title}</td>
                                    <td><a href={item.link} target='_blank'>바로가기</a></td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>


        </div>
    );
}

export default App;
