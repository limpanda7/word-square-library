import React, {useState, useEffect} from 'react';
import './App.scss';
import * as List from './List.js';

function App() {

    const [type, setType] = useState('1');
    const [list, setList] = useState([]);

    useEffect(() => {
        switch (type) {
            case '1':
                setList(List.list1);
                return;
            case '2':
                setList(List.list2);
                return;
            case '3':
                setList(List.list3);
                return;
            case '4':
                setList(List.list4);
                return;
            case '5':
                setList(List.list5);
                return;
            case '6':
                setList(List.list6);
                return;
            default:
                return;
        }
    }, [type])

    return (
        <div className="App">

            <div className='Header'>
                <h1>말씀광장 라이브러리</h1>
                <select onChange={(e) => setType(e.target.value)}>
                    {/*<option value='0'>선택하세요</option>*/}
                    <option value='1'>무신앙용(오픈예정자)</option>
                    <option value='2'>무신앙용(오픈)</option>
                    <option value='3'>따기 후 단향용</option>
                    <option value='4'>신앙인용(오픈예정자)</option>
                    <option value='5'>신앙인용(휴신앙 및 믿음유약)</option>
                    <option value='6'>신앙인용(열심형)</option>
                </select>
            </div>

            <div className='Content'>

                {/*{*/}
                {/*    type === '0' &&*/}
                {/*    <div className='Description'>*/}
                {/*        ❣️링크 보내는 tip<br/>*/}
                {/*        청년) " 나요즘 신천지에서 하는 컨텐츠 댓글리뷰 해주고있는데  은근 흥미로운거 같아 ! 사실 알고지낸 애가 갑자기 자기 신천지라면서 해달라고 하더라구 . 근데 이상한건 없는것 같더라~  손해볼거 없어서 해주고 있어."<br/>*/}
                {/*        베댓(베스트댓글) 당첨되면 커피쿠폰 날라옴!!<br/><br/>*/}

                {/*        장년/부녀) 우리 딸이 이걸 보내줬는데 무슨 내용같냐고 물어보더니 신천지교회에서 만든거라고 하네요.  이상한 교회인줄 알았는데 아닌거 같다면서 봐보라는데 같이 한번 봅시다 ~!<br/><br/>*/}

                {/*        오픈섭자 청년 ) 우리교회에서 만들고있는 컨텐츠들인데 한번 봐줄수있어?<br/>*/}
                {/*        하도 사람들이 여기는 하나님 예수님을 안믿고 교주 믿는다고 오해를 하니까 ㅠㅠ<br/>*/}
                {/*        무엇을 믿고,  말하고자 하는게 뭔지 쉽게 알려주기 위해 만들고 있거든~!  이걸보고 객관적으로 어떻게 느껴지나 궁금한데 ..코멘트 한마디만 달아주면 좋겠어!<br/><br/>*/}

                {/*        오픈섭자 장년/부녀) 우리교회 청년들이 만든 영상인데 한번 봐줄수 있어요?~ 하도 요즘 사람들이 오해가 많아서 말이죠 ..<br/>*/}
                {/*        신천지교회는 하나님, 예수님을 분명하게 믿고  신앙하는 교회거든요.<br/>*/}
                {/*        영상보고나서 어땠는지 한마디만 적어주면 더 좋은 영상을 만들수 있다고 하니까 시간나면 부탁해요~^^*/}
                {/*    </div>*/}
                {/*}*/}
                {
                    type === '1' &&
                    <div className='Description'>
                        🖤무신앙용(오픈예정자 or 오픈했으나 관심없는 유형): 1분성경 (※주의: 영상안에 S가 언급되진 않으나 링크를 자세히 들어가면 오픈될 수 있습니다. 따라서 오픈해도 상관없는 지인에게 보내는 것을 권장합니다. )
                    </div>
                }
                {
                    type === '2' &&
                    <div className='Description'>
                        🤍무신앙용(오픈): 유쾌한 강사 / 신서의역사 / 바이블프리즘<br/>
                        ※ 영상끝에 튜터링 광고가 포함되어 있습니다
                    </div>
                }
                {
                    type === '3' &&
                    <div className='Description'>
                        🍎따기 후 단향용: 성경쨈과<br/>
                        ※영상끝에 던져주는 질문을 통해 밭갈이 후 반응을 확인할 수 있습니다
                    </div>
                }
                {
                    type === '4' &&
                    <div className='Description'>
                        ❤️신앙인용(오픈예정자): 선지사도 테스트<br/>
                        ※바벨에 다니고 있을경우가 많으므로 영상보다는 테스트를 권장합니다.
                    </div>
                }
                {
                    type === '5' &&
                    <div className='Description'>
                        🧡신앙인용(휴신앙 및 믿음유약): 바이블라이프 / 성경읽어주는남자
                    </div>
                }
                {
                    type === '6' &&
                    <div className='Description'>
                        💛신앙인용(열심형): 갓 나온 역사
                    </div>
                }

                {
                    type !== '0' &&
                    <table>
                        <tr>
                            <th></th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>링크</th>
                        </tr>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className='Category'>{item.category}</td>
                                        <td className='Title'>{item.title}</td>
                                        <td><a href={item.link} target='_blank'>▶</a></td>
                                    </tr>
                                );
                            })
                        }
                    </table>
                }
            </div>


        </div>
    );
}

export default App;
