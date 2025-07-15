/* 함수 주석
* 1. [공통]사이드바 (function, 실행문)
* 2. [공통]상단 글씨크기 변경 (function, 실행문)
* 3. [공통]모달 관련 함수 (function, 실행문)
* 4. [장바구니]탭 관련 함수 (function)
* 5. [수강신청내역]수강신청 탭 관련 함수 (function, 실행문)
* 6. [공통]라디오 버튼 핸들러 (실행문)
* 7. [결제내역]데이트피커 (실행문)
* 8. [결제내역]테이블 rowspan 존재시 hover색상 지정 (실행문)
* 9. [공통] 테이블 체크박스 존재시 클릭하면 전체 선택 (function, 실행문)
* 10. [공통] 셀렉트박스 (function)
* 11. [결제내역] 주민등록번호 : 가상키패드 (function, 실행문)
* 12. [결제내역] 주민등록번호 : 앞자리 유효성 검사 (function)
* 13. [수강신청내역] 수강신청탭 안의 체크박스 수 제한 (실행문)
* 14. [공통] button/a 중복클릭 방지 (function, 실행문)
* 15. [변수 모음 : 강의 수준별 진도표 관련: 분당/일산/올림픽] 
*  */
/*-----------------------------------------------------------------------------------------------------*/
/* --- [변수 모음 : 15] */
const courseBundang = `
 <!-- (분당 스포츠 센터) -->
        <div class="sub-content-box">
          <h4 class="sub-title2 c-gray">[수영 수준별 진도표]</h4>
          <div class="custom-info-table-wrap">
            <div class="flex-wrap gap-auto col-ver">
              <div class="flex-wrap mo-col gap-auto">
                <div class="flex1 custom-info-table">
                  <table>
                    <caption class="visually-hidden">수영 수준별 진도표: 주5회, 주3회 강습반(분당 스포츠 센터)</caption>
                    <colgroup>
                      <col style="width:50px;"/>
                      <col style="width:55px" class="body-lg-only-tc" />
                      <col style="width:70px;" class="mobile-only-tc"/>
                      <col style="" class="mobile-only-tc"/>
                      <col style="width:70px;" class="mobile-only-tc"/>
                      <col class="body-lg-only-tc"/>
                      <col style="width:70px" class="body-lg-only-tc" />
                    </colgroup>
                    <thead>
                    <tr>
                      <th rowspan="2"><div class="th-wrap">구분</div></th>
                      <th colspan="3" class="no-br"><div class="th-wrap">주5회, 주3회 강습반</div></th>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">반명</div></th>
                      <th><div class="th-wrap">강습내용</div></th>
                      <th class="no-br"><div class="th-wrap">강습기간</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- 1. 기초 -->
                    <tr>
                      <th rowspan="2"><div class="th-wrap">기초</div></th>
                      <th class="col1-2-3"><div class="th-wrap">신기초</div></th>
                      <td><div class="td-wrap">자유형</div></td>
                      <td rowspan="2" class="no-br"><div class="td-wrap">2개월</div></td>
                    </tr>
                    <tr>
                      <th class="col1-2-3"><div class="th-wrap">기초1</div></th>
                      <td><div class="td-wrap">배영</div></td>
                    </tr>
                    <!-- 2. 초급 -->
                    <tr>
                      <th rowspan="3"><div class="th-wrap">초급</div></th>
                      <th class="col1-3-4"><div class="th-wrap">초급1</div></th>
                      <td><div class="td-wrap">평영 발차기</div></td>
                      <td rowspan="3" class="no-br"><div class="td-wrap">3개월</div></td>
                    </tr>
                    <tr>
                      <th class="col1-3-4"><div class="th-wrap">초급2</div></th>
                      <td><div class="td-wrap">평영 발동작</div></td>
                    </tr>
                    <tr>
                      <th class="col1-3-4"><div class="th-wrap">초급3</div></th>
                      <td><div class="td-wrap">평영 종합동작</div></td>
                    </tr>
                    <!-- 3. 중급 -->
                    <tr>
                      <th rowspan="3"><div class="th-wrap">중급</div></th>
                      <th class="col1-3-4"><div class="th-wrap">중급1</div></th>
                      <td><div class="td-wrap">접영 발차기</div></td>
                      <td rowspan="3" class="no-br"><div class="td-wrap">3개월</div></td>
                    </tr>
                    <tr>
                      <th class="col1-3-4"><div class="th-wrap">중급2</div></th>
                      <td><div class="td-wrap">접영 발동작</div></td>
                    </tr>
                    <tr>
                      <th class="col1-3-4"><div class="th-wrap">중급3</div></th>
                      <td><div class="td-wrap">접영 종합동작/자유형 팔꺾기</div></td>
                    </tr>

                    <!-- [모바일에서만] 4. 상급 -->
                    <tr class="mobile-only-tr">
                      <th><div class="th-wrap">상급</div></th>
                      <td><div class="td-wrap">6개월</div></td>
                      <td colspan="2" class="no-br"><div class="td-wrap">각 영법 숙달 및 지구력 강화, 자세교정, 턴, 스타트, 응용영법,
                        각 영법별 물잡기 훈련, 핀수영 운동량 1000M 이상</div></td>
                    </tr>

                    <!-- [모바일에서만] 5. 연수 -->
                    <tr class="mobile-only-tr">
                      <th class=""><div class="th-wrap">연수</div></th>
                      <td class=""><div class="td-wrap">24개월</div></td>
                      <td colspan="2" class="no-br"><div class="td-wrap">잠영, 입영, 스타트, 핀수영 운동량 1400M 이상</div></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="flex1 custom-info-table">
                  <table>
                    <colgroup>
                      <col style="width:50px;" class="mobile-only-tc"/>
                      <col style="width:92px;" class="mobile-only-tc"/>
                      <col style="" class="mobile-only-tc"/>
                      <col style="width:70px;" class="mobile-only-tc"/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th class="no-br pc-only-cell" colspan="3"><div class="th-wrap">수영 수준별 진도표: 주 2회 강습반</div></th>
                      <th class="no-br mobile-only-cell" colspan="4"><div class="th-wrap">수영 수준별 진도표: 주 2회 강습반</div></th>
                    </tr>
                    <tr>
                      <th class="mobile-only-cell"><div class="th-wrap">구분</div></th>
                      <th><div class="th-wrap">반명</div></th>
                      <th><div class="th-wrap">강습내용</div></th>
                      <th class="no-br"><div class="th-wrap">강습기간</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- 1. 기초 -->
                    <tr>
                      <th class="mobile-only-cell" rowspan="3"><div class="th-wrap">기초</div></th>
                      <th><div class="th-wrap">신기초</div></th>
                      <td><div class="td-wrap">자유형</div></td>
                      <td rowspan="3" class="no-br"><div class="td-wrap">3개월</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">기초1</div></th>
                      <td><div class="td-wrap">배영 발차기, 배영 팔 동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">기초2</div></th>
                      <td><div class="td-wrap">자유형 및 배영 숙달</div></td>
                    </tr>

                    <!-- 2. 초급 -->
                    <tr>
                      <th class="mobile-only-cell" rowspan="4"><div class="th-wrap">초급</div></th>
                      <th><div class="th-wrap">초급1</div></th>
                      <td><div class="td-wrap">평영 발차기</div></td>
                      <td rowspan="4" class="no-br"><div class="td-wrap">4개월</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급2</div></th>
                      <td><div class="td-wrap">평영 팔동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급3</div></th>
                      <td><div class="td-wrap">평영 종합동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급4</div></th>
                      <td><div class="td-wrap">평영 숙달</div></td>
                    </tr>

                    <!-- 3. 중급 -->
                    <tr>
                      <th class="mobile-only-cell" rowspan="4"><div class="th-wrap">중급</div></th>
                      <th><div class="th-wrap">중급1</div></th>
                      <td><div class="td-wrap">접영 발차기</div></td>
                      <td rowspan="4" class="no-br"><div class="td-wrap">4개월</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급2</div></th>
                      <td><div class="td-wrap">접영 팔동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급3</div></th>
                      <td><div class="td-wrap">접영 종합동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급4</div></th>
                      <td><div class="td-wrap">접영 숙달/자융형 팔꺾기</div></td>
                    </tr>

                    <!-- [모바일에서만] 4. 상급 -->
                    <tr class="mobile-only-tr">
                      <th><div class="th-wrap">상급</div></th>
                      <td><div class="td-wrap">6개월</div></td>
                      <td colspan="2" class="no-br"><div class="td-wrap">각 영법 숙달 및 지구력 강화, 자세교정, 턴, 스타트, 응용영법,
                        각 영법별 물잡기 훈련, 핀수영 운동량 1000M 이상</div></td>
                    </tr>

                    <!-- [모바일에서만] 5. 연수 -->
                    <tr class="mobile-only-tr">
                      <th class="no-bb"><div class="th-wrap">연수</div></th>
                      <td class="no-bb"><div class="td-wrap">24개월</div></td>
                      <td colspan="2" class="no-br no-bb"><div class="td-wrap">잠영, 입영, 스타트, 핀수영 운동량 1400M 이상</div></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="flex1 custom-info-table pc-only">
                <table aria-describedby="table-description">
                  <caption class="visually-hidden">수영 수준별 진도표: 주5회, 주3회 강습반, 주2회 강습반의 상금 연수에 관한 표</caption>
                  <colgroup>
                    <!-- 첫 번째 열: 50px -->
                    <col style="width:50px;"/>
                    <!-- 두 번째 열: 3 부분 중 하나 -->
                    <col style="width:316px;"/>
                    <!-- 세 번째 열: 5 부분 중 하나 -->
                    <col style="width:calc((100% - 50px) * 5 / 8);"/>
                  </colgroup>
                  <tbody>
                  <!-- 1. 기초 -->
                  <tr>
                    <th><div class="th-wrap">상급</div></th>
                    <td><div class="td-wrap">6개월</div></td>
                    <td class="no-br pd-sm">
                      <div class="td-wrap left">
                        각 영법 숙달 및 지구력 강화, 자세교정, 턴, 스타트, 응용영법,
                        각 영법별 물잡기 훈련, 핀수영 운동량 1000M 이상
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="no-bb"><div class="th-wrap">연수</div></th>
                    <td class="no-bb"><div class="td-wrap">24개월 이상</div></td>
                    <td class="no-br no-bb pd-sm">
                      <div class="td-wrap left">잠영, 입영, 스타트, 핀수영 운동량 1400M 이상</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-content-box">
          <h4 class="sub-title2">[스케이트 수준별 진도표]</h4>
          <div class="custom-info-table-wrap">
            <div class="flex-wrap col-ver gap-auto">
              <!-- 1. pc에서만! -->
              <div class="flex1 custom-info-table pc-only">
                <table>
                  <caption class="visually-hidden">스케이트 수준별 진도표: 주5회, 주3회 강습반</caption>
                  <colgroup>
                    <col style="width:80px;"/>
                    <col style="width:190px;"/>
                    <col style="width:70px;"/>
                    <col style=""/>
                    <col style="width: 70px;"/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th rowspan="2"><div class="th-wrap">구분</div></th>
                    <th colspan="2"><div class="th-wrap">스피드 스케이팅</div></th>
                    <th colspan="3" class="no-br"><div class="th-wrap">피겨스키이팅</div></th>
                  </tr>
                  <tr>
                    <th><div class="th-wrap">강습내용</div></th>
                    <th><div class="th-wrap">강습기간</div></th>
                    <th><div class="th-wrap">강습내용</div></th>
                    <th class="no-br"><div class="th-wrap">강습기간</div></th>
                  </tr>
                  </thead>
                  <tbody>
                  <!-- 1. 초급 -->
                  <tr>
                    <th rowspan="3"><div class="th-wrap">초급</div></th>
                    <td rowspan="3">
                      <div class="td-wrap">
                        걷기,발밀고 모으기, 찍기
                      </div>
                    </td>
                    <td rowspan="3"><div class="td-wrap">3개월</div></td>
                    <td class="pd-sm"><div class="td-wrap">얼음적응, 넘어지기, 일어나기, 걷기, 밀기</div></td>
                    <td class="no-br"><div class="td-wrap">2개월</div></td>
                  </tr>
                  <tr>
                    <td class="pd-sm">
                      <div class="td-wrap">
                        양팔들고 밀어서 한반 들고 가기(반원),양팔 들고
                        앞/뒤 반달 밀기,양팔 들고 옆으로 걸으며
                        크로스오버(코너연습)
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">2개월</div></td>
                  </tr>
                  <tr>
                    <td class="pd-sm">
                      <div class="td-wrap">
                        양팔들고 원위에서 앞/뒤로 크로스오버(코너연습),
                        반원위에서 앞으로 인/아웃사이드
                        한발 들고 가기(초급과제항목)
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">2개월</div></td>
                  </tr>
                  <!-- 2. 중급 -->
                  <tr>
                    <th rowspan="3"><div class="th-wrap">중급</div></th>
                    <td rowspan="3" class="pd-sm">
                      <div class="td-wrap">
                        찍기(직선동작),
                        코너 발넘기기,손동작 코너
                      </div>
                    </td>
                    <td rowspan="3"><div class="td-wrap">4개월</div></td>
                    <td><div class="td-wrap">8자 크로스오버 앞/뒤로 팔동작 및 여러 엣지동작</div></td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>
                  <tr>
                    <td class="pd-sm">
                      <div class="td-wrap">
                        토스텝, 펜스잡고 런지, 스케이팅하며
                        런지 버니홉, 체크아웃
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>
                  <tr>
                    <td class="pd-sm">
                      <div class="td-wrap">
                        한발 원스핀, 제자리 왈츠점프
                        모학스텝, 스텝응용
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>
                  <!-- 3. 상급 -->
                  <tr>
                    <th><div class="th-wrap">상급</div></th>
                    <td><div class="td-wrap">손동작 코너, 직선코너 활주, 활주 위주 강습, 스타트</div></td>
                    <td><div class="td-wrap">5개월</div></td>
                    <td class="pd-sm"><div class="td-wrap">모학스텝 연결 왈츠 점프 원스핀, 모학스텝, 왈츠점프, 여러 엣지스케이팅</div></td>
                    <td class="no-br"><div class="td-wrap">지속</div></td>
                  </tr>
                  <!-- 4. 마스터반 -->
                  <tr>
                    <th class="no-bb"><div class="th-wrap">마스터반<br>(특별반)</div></th>
                    <td class="no-bb"><div class="td-wrap">담당선생님 상담 후 수업 진행</div></td>
                    <td class="no-bb"><div class="td-wrap">-</div></td>
                    <td class="pd-sm no-bb"><div class="td-wrap">고난이도 기술 및 국가자격증 취득 요망시 담당선생님 상담 후 수업 진행</div></td>
                    <td class="no-br no-bb"><div class="td-wrap">-</div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- 2. 모바일 에서만! -->
              <div class="flex1 custom-info-table mobile-only">
                <table>
                  <caption class="visually-hidden">스케이트 수준별 진도표: 주5회, 주3회 강습반</caption>
                  <colgroup>
                    <col style="width:80px;"/>
                    <col style=""/>
                    <col style="width: 80px;"/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th rowspan="2"><div class="th-wrap">구분</div></th>
                    <th colspan="2" class="no-br"><div class="th-wrap">스피드 스케이팅</div></th>
                  </tr>
                  <tr>
                    <th><div class="th-wrap">강습내용</div></th>
                    <th class="no-br"><div class="th-wrap">강습기간</div></th>
                  </tr>
                  </thead>
                  <tbody>
                  <!-- 1. 초급 -->
                  <tr>
                    <th><div class="th-wrap">초급</div></th>
                    <td>
                      <div class="td-wrap">
                        걷기,발밀고 모으기, 찍기
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">3개월</div></td>
                  </tr>
                  <!-- 2. 중급 -->
                  <tr>
                    <th><div class="th-wrap">중급</div></th>
                    <td>
                      <div class="td-wrap">
                        찍기(직선동작),<br>
                        코너 발넘기기,손동작 코너
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">4개월</div></td>
                  </tr>

                  <!-- 3. 상급 -->
                  <tr>
                    <th><div class="th-wrap">상급</div></th>
                    <td>
                      <div class="td-wrap">
                        손동작 코너, 직선코너 활주,
                        활주 위주 강습, 스타트
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">5개월</div></td>
                  </tr>

                  <!-- 4. 마스터반 -->
                  <tr>
                    <th><div class="th-wrap">마스터즈반<br>(특별반)</div></th>
                    <td>
                      <div class="td-wrap">
                        담당선생님 상담 후 수업 진행
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">-</div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex1 custom-info-table mobile-only">
                <table>
                  <caption class="visually-hidden">피겨 스케이트 수준별 진도표</caption>
                  <colgroup>
                    <col style="width:80px;"/>
                    <col style=""/>
                    <col style="width: 80px;"/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th rowspan="2"><div class="th-wrap">구분</div></th>
                    <th colspan="2" class="no-br"><div class="th-wrap">피겨 스케이팅</div></th>
                  </tr>
                  <tr>
                    <th><div class="th-wrap">강습내용</div></th>
                    <th class="no-br"><div class="th-wrap">강습기간</div></th>
                  </tr>
                  </thead>
                  <tbody>
                  <!-- 1. 초급 -->
                  <tr>
                    <th rowspan="3"><div class="th-wrap">초급</div></th>
                    <td>
                      <div class="td-wrap">
                        얼음적응, 넘어지기, 일어나기, 걷기, 밀기
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">2개월</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="td-wrap">
                        양팔들고 밀어서 한반 들고 가기(반원),양팔 들고
                        앞/뒤 반달 밀기,양팔 들고 옆으로 걸으며
                        크로스오버(코너연습)
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">2개월</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="td-wrap">
                        양팔들고 원위에서 앞/뒤로 크로스오버(코너연습),
                        반원위에서 앞으로 인/아웃사이드
                        한발 들고 가기(초급과제항목)
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>
                  <!-- 2. 중급 -->
                  <tr>
                    <th rowspan="3"><div class="th-wrap">중급</div></th>
                    <td>
                      <div class="td-wrap">
                        8자 크로스오버 앞/뒤로 팔동작 및 여러 엣지동작
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="td-wrap">
                        토스텝, 펜스잡고 런지, 스케이팅하며
                        런지 버니홉, 체크아웃
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="td-wrap">
                        한발 원스핀, 제자리 왈츠점프
                        모학스텝, 스텝응용
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">1개월</div></td>
                  </tr>

                  <!-- 3. 상급 -->
                  <tr>
                    <th><div class="th-wrap">상급</div></th>
                    <td>
                      <div class="td-wrap">
                        모학스텝 연결 왈츠 점프 원스핀,
                        모학스텝, 왈츠점프, 여러 엣지스케이팅
                      </div>
                    </td>
                    <td class="no-br"><div class="td-wrap">지속</div></td>
                  </tr>

                  <!-- 4. 마스터반 -->
                  <tr>
                    <th class="no-bb"><div class="th-wrap">마스터즈반<br>(특별반)</div></th>
                    <td class="no-bb">
                      <div class="td-wrap">
                        고난이도 기술 및 국가자격증 취득 요망시
                        담당선생님 상담 후 수업 진행
                      </div>
                    </td>
                    <td class="no-br no-bb"><div class="td-wrap">-</div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ul class="reference-list mt-8">
          <li>수강신청시 반드시 본인 수준과 진도표에 맞게 수강신청 해주시기 바라며 강습레벨이 맞지 않아 환불을 진행하는 경우에는 10%
            위약금이 발생됩니다.</li>
          <li>프로그램의 원활한 운영을 위해 합반 및 승급 시 진도표와 상이할 수 있습니다.</li>
          <li>시간별 강습생 진도에 따라 급수별 차이가 있을 수 있습니다.</li>
        </ul>
`
const courseOlympic = `
      <!-- (올림픽 수영장) -->
        <div class="sub-content-box">
          <div class="custom-info-table-wrap scroll">
            <div class="flex-wrap gap-auto col-ver">
              <div class="flex-wrap mo-col gap-auto">
                <div class="flex1 custom-info-table">
                  <table>
                    <caption class="visually-hidden">수영 수준별 진도표: 성인(주 5일반)[올림픽 수영장]</caption>
                    <colgroup>
                      <col style="width:50px;"/>
                      <col style="width:70px" />
                      <col style="width:70px;"/>
                      <col style="width:100px;"/>
                      <col style="width:70px;"/>
                      <col style=""/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th rowspan="2"><div class="th-wrap">구분</div></th>
                      <th rowspan="2"><div class="th-wrap">반명</div></th>
                      <th rowspan="2"><div class="th-wrap">강습기간</div></th>
                      <th rowspan="2"><div class="th-wrap">강습내용</div></th>
                      <th colspan="2" class="no-br"><div class="th-wrap">어린이(화•목)</div></th>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">반명</div></th>
                      <th class="no-br"><div class="th-wrap">강습내용</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- 기초 -->
                    <tr>
                      <th rowspan="2"><div class="th-wrap">기초</div></th>
                      <th><div class="th-wrap">신기초</div></th>
                      <td><div class="td-wrap">1개월</div></td>
                      <td colspan="3" class="no-br"><div class="td-wrap">물적응 및 자유형 발차기, 팔동작, 종합동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">기초1</div></th>
                      <td><div class="td-wrap">2개월</div></td>
                      <td colspan="3" class="no-br"><div class="td-wrap">자유형 및 배영 발차기, 배영 팔동작</div></td>
                    </tr>
                    <!-- 초급 -->
                    <tr>
                      <th rowspan="4"><div class="th-wrap">초급</div></th>
                      <th rowspan="2"><div class="th-wrap">초급1</div></th>
                      <td rowspan="2"><div class="td-wrap">1개월</div></td>
                      <td rowspan="2"><div class="td-wrap">자유형 팔 꺾기</div></td>
                      <th><div class="th-wrap">초급1</div></th>
                      <td class="no-br"><div class="td-wrap">자유형 팔 꺾기</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급2</div></th>
                      <td class="no-br"><div class="td-wrap">평영 발차기</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급2</div></th>
                      <td><div class="td-wrap">2개월</div></td>
                      <td><div class="td-wrap">평영 발차기</div></td>
                      <th><div class="th-wrap">초급3</div></th>
                      <td class="no-br"><div class="td-wrap">평영 발차기</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급3</div></th>
                      <td><div class="td-wrap">3개월</div></td>
                      <td><div class="td-wrap">평영 팔동작 및 평영 종합동작</div></td>
                      <th><div class="th-wrap">초급4</div></th>
                      <td class="no-br"><div class="td-wrap">평영 팔동작</div></td>
                    </tr>
                    <!-- 중급 -->
                    <tr>
                      <th rowspan="4"><div class="th-wrap">중급</div></th>
                      <th rowspan="2"><div class="th-wrap">중급1</div></th>
                      <td rowspan="2"><div class="td-wrap">1개월</div></td>
                      <td rowspan="2"><div class="td-wrap">접영 발차기</div></td>
                      <th><div class="th-wrap">중급1</div></th>
                      <td class="no-br"><div class="td-wrap">접영 발차기</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급2</div></th>
                      <td class="no-br"><div class="td-wrap">접영 팔동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급2</div></th>
                      <td><div class="td-wrap">2개월</div></td>
                      <td><div class="td-wrap">접영 팔동작</div></td>
                      <th><div class="th-wrap">중급3</div></th>
                      <td class="no-br"><div class="td-wrap">접영 종합동작</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급3</div></th>
                      <td><div class="td-wrap">3개월</div></td>
                      <td><div class="td-wrap">접영 종합동작</div></td>
                      <th><div class="th-wrap">중급3</div></th>
                      <td class="no-br"><div class="td-wrap">접영 종합동작 숙달</div></td>
                    </tr>
                    <!-- 상급 -->
                    <tr>
                      <th rowspan="3"><div class="th-wrap">상급</div></th>
                      <th><div class="th-wrap">상급1</div></th>
                      <td rowspan="3"><div class="td-wrap">3개월</div></td>
                      <td rowspan="3" colspan="3" class="no-br"><div class="td-wrap">각 영법 숙달 및 지구력강화, 턴스타트, 운동량 1000M 이상</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">상급2</div></th>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">상급3</div></th>
                    </tr>
                    <!-- 고급 -->
                    <tr>
                      <th colspan="2"><div class="th-wrap">고급</div></th>
                      <td><div class="td-wrap">6개월</div></td>
                      <td colspan="3" class="no-br"><div class="td-wrap">상급반+자세교정, 스피드강화,운동량 1200M 이상(FIN수영 성인반&직장인반 가능)</div></td>
                    </tr>
                    <!-- 연수 -->
                    <tr>
                      <th colspan="2" class="no-bb"><div class="th-wrap">연수</div></th>
                      <td class="no-bb"><div class="td-wrap">18개월 이상</div></td>
                      <td colspan="3" class="no-bb no-br"><div class="td-wrap">고급반 +입영, 잠영,핀수영 운동량 1400M 이상(FIN수영 어린이반&주부반)</div></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--<div class="flex1 custom-info-table pc-only">
                <table aria-describedby="table-description">
                  <caption class="visually-hidden">수영 수준별 진도표: 주5회, 주3회 강습반, 주2회 강습반의 상금 연수에 관한 표</caption>
                  <colgroup>
                    &lt;!&ndash; 첫 번째 열: 50px &ndash;&gt;
                    <col style="width:50px;"/>
                    &lt;!&ndash; 두 번째 열: 3 부분 중 하나 &ndash;&gt;
                    <col style="width:316px;"/>
                    &lt;!&ndash; 세 번째 열: 5 부분 중 하나 &ndash;&gt;
                    <col style="width:calc((100% - 50px) * 5 / 8);"/>
                  </colgroup>
                  <tbody>
                  &lt;!&ndash; 1. 기초 &ndash;&gt;
                  <tr>
                    <th><div class="th-wrap">상급</div></th>
                    <td><div class="td-wrap">6개월</div></td>
                    <td class="no-br pd-sm">
                      <div class="td-wrap left">
                        각 영법 숙달 및 지구력 강화, 자세교정, 턴, 스타트, 응용영법,
                        각 영법별 물잡기 훈련, 핀수영 운동량 1000M 이상
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="no-bb"><div class="th-wrap">연수</div></th>
                    <td class="no-bb"><div class="td-wrap">24개월 이상</div></td>
                    <td class="no-br no-bb pd-sm">
                      <div class="td-wrap left">잠영, 입영, 스타트, 핀수영 운동량 1400M 이상</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>-->
            </div>
          </div>
          <ul class="reference-list mt-8">
            <li>별 목표치를 두어 각반의 마스터가 가능하도록 함.</li>
          </ul>
        </div>
`
const courseIlsan = `
        <!-- (일산 스포츠 센터) -->
        <div class="sub-content-box">
          <h4 class="sub-title2 c-gray">[성인(주 5일반)]</h4>
          <div class="custom-info-table-wrap">
            <div class="flex-wrap gap-auto col-ver">
              <div class="flex-wrap mo-col gap-auto">
                <div class="flex1 custom-info-table">
                  <table>
                    <caption class="visually-hidden">수영 수준별 진도표: 성인(주 5일반)</caption>
                    <colgroup>
                      <col style="width:50px;"/>
                      <col style="width:70px" />
                      <col style="width:70px;"/>
                      <col style=""/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th><div class="th-wrap">구분</div></th>
                      <th><div class="th-wrap">반명</div></th>
                      <th><div class="th-wrap">강습기간</div></th>
                      <th class="no-br"><div class="th-wrap">강습내용</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- 기초 -->
                    <tr>
                      <th rowspan="2"><div class="th-wrap">기초</div></th>
                      <th><div class="th-wrap">신기초</div></th>
                      <td rowspan="2"><div class="td-wrap">2개월</div></td>
                      <td class="no-br"><div class="td-wrap">물적응, 자유형 kick, 기본 자유형(킥판 사용), 배영 kick</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">기초1</div></th>
                      <td class="no-br"><div class="td-wrap">자유형, 배영 pull, 배영 combination</div></td>
                    </tr>
                    <!-- 초급 -->
                    <tr>
                      <th rowspan="2"><div class="th-wrap">초급</div></th>
                      <th><div class="th-wrap">초급1</div></th>
                      <td rowspan="2"><div class="td-wrap">2개월</div></td>
                      <td class="no-br"><div class="td-wrap">자유형 및 배영 combi 숙달, 평영 kick</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급2</div></th>
                      <td class="no-br"><div class="td-wrap">평영 pull, 평영 combination</div></td>
                    </tr>
                    <!-- 중급 -->
                    <tr>
                      <th rowspan="2"><div class="th-wrap">중급</div></th>
                      <th><div class="th-wrap">중급1</div></th>
                      <td rowspan="2"><div class="td-wrap">2개월</div></td>
                      <td class="no-br"><div class="td-wrap">평영 combi 숙달, 접영 kick, wave</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급2</div></th>
                      <td class="no-br"><div class="td-wrap">접영 pull, 접영 combination, 자유형 팔 꺽기 사이드 턴, 기본 입수법(메인풀 이용), fin 연습</div></td>
                    </tr>
                    <!-- 상급 -->
                    <tr>
                      <th class="no-bb"><div class="th-wrap">상급</div></th>
                      <th class="no-bb"><div class="th-wrap">교정/연수</div></th>
                      <td class="no-bb"><div class="td-wrap">fin 숙달</div></td>
                      <td class="no-bb no-br"><div class="td-wrap">자유형, 배영, 평영, 접영의 지구력 및 교정, 턴 스타트 등등</div></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <ul class="reference-list mt-8">
            <li>주말 및 어린이반(주2일반)은 각 과정이 4개월씩입니다.</li>
          </ul>
        </div>
        <div class="sub-content-box">
          <h4 class="sub-title2 c-gray">[성인(주 3일반)]</h4>
          <div class="custom-info-table-wrap">
            <div class="flex-wrap gap-auto col-ver">
              <div class="flex-wrap mo-col gap-auto">
                <div class="flex1 custom-info-table">
                  <table>
                    <caption class="visually-hidden">수영 수준별 진도표: 성인(주 3일반)</caption>
                    <colgroup>
                      <col style="width:50px;"/>
                      <col style="width:70px" />
                      <col style="width:70px;"/>
                      <col style=""/>
                    </colgroup>
                    <thead>
                    <tr>
                      <th><div class="th-wrap">구분</div></th>
                      <th><div class="th-wrap">반명</div></th>
                      <th><div class="th-wrap">강습기간</div></th>
                      <th class="no-br"><div class="th-wrap">강습내용</div></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- 기초 -->
                    <tr>
                      <th rowspan="3"><div class="th-wrap">기초</div></th>
                      <th><div class="th-wrap">신기초</div></th>
                      <td rowspan="3"><div class="td-wrap">3개월</div></td>
                      <td class="no-br"><div class="td-wrap">물 적응, 자유형 kick, 자유형 pull</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">기초1</div></th>
                      <td class="no-br"><div class="td-wrap">킥판잡고 자유형, 배영 kick, pull</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">기초2</div></th>
                      <td class="no-br"><div class="td-wrap">자유형 및 배영 combination</div></td>
                    </tr>
                    <!-- 초급 -->
                    <tr>
                      <th rowspan="3"><div class="th-wrap">초급</div></th>
                      <th><div class="th-wrap">초급1</div></th>
                      <td rowspan="3"><div class="td-wrap">3개월</div></td>
                      <td class="no-br"><div class="td-wrap">자유형, 배영 combi 숙달, 평영 kick</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급2</div></th>
                      <td class="no-br"><div class="td-wrap">평영 kick, pull</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">초급3</div></th>
                      <td class="no-br"><div class="td-wrap">평영 combination</div></td>
                    </tr>
                    <!-- 중급 -->
                    <tr>
                      <th rowspan="3"><div class="th-wrap">중급</div></th>
                      <th><div class="th-wrap">중급1</div></th>
                      <td rowspan="3"><div class="td-wrap">3개월</div></td>
                      <td class="no-br"><div class="td-wrap">평영 combi숙달, 접영 kick</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급2</div></th>
                      <td class="no-br"><div class="td-wrap">접영 wave, 접영 pull, 자유형 팔꺽기</div></td>
                    </tr>
                    <tr>
                      <th><div class="th-wrap">중급3</div></th>
                      <td class="no-br"><div class="td-wrap">접영 combination</div></td>
                    </tr>
                    <!-- 상급 -->
                    <tr>
                      <th class="no-bb"><div class="th-wrap">상급</div></th>
                      <th class="no-bb"><div class="th-wrap">교정/연수</div></th>
                      <td class="no-bb"><div class="td-wrap">fin 숙달</div></td>
                      <td class="no-bb no-br"><div class="td-wrap">자유형, 배영, 평영, 접영의 지구력 및 교정, 턴 스타트 등등</div></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <ul class="reference-list mt-8">
            <li class="c-red">수준별 진도에 맞는 강습반 등록바람, 진도가 맞지 않을경우 수강이 어려울 수 있습니다.</li>
          </ul>
        </div>
`
/* ---- [ function 모음 : 1,2,3,4,5,9,10,11,12]-------------------------------------------------------- */

/* 1. [공통]사이드바 */
// 사이드바 열기
function openSideBar() {
  /* 1. 사이드바 */
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴
  const breakpoint = 1200; // PC와 모바일을 구분할 기준 너비

  if ($(window).width() < breakpoint) {
    $dimOverlay.addClass('active');
    $sidebar.addClass('active');
    $('body').addClass('no-scroll');

    // iOS VoiceOver 대응을 위한 추가 코드
    $sidebar.attr({
      'role': 'dialog',
      'aria-modal': 'true'
    });

    // 사이드바 외부 요소 비활성화 (inert 속성 사용)
    if ('inert' in HTMLElement.prototype) {
      // inert 속성에서 모달을 제외하여 설정
      $('body > *')
        .not($sidebar)
        .not($sidebar.parents())
        .not($dimOverlay)
        .not('.modal[style*="display: block"]') // 열린 모달은 inert 제외
        .attr('inert', '');
    } else {
      applyInertPolyfill();
    }

    trapFocus($sidebar[0]);
  }
}
// 사이드바 닫기
function closeSideBar() {
  removeActiveClasses();
}
// -------- 사이드바 열고 닫기 관련 함수 모음 -----------
// 포커스 트랩 함수
function trapFocus(container) {
  const focusableElements = Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => {
    // 보이는 요소만 걸러냄 (display: none 등)
    return el.offsetParent !== null;
  });

  if (focusableElements.length === 0) return;

  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  firstEl.focus();

  function handleKeydown(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    } else if (e.key === 'Escape') {
      closeSidebar();
    }
  }

  document.addEventListener('keydown', handleKeydown);
}

// 사이드바 닫기 공통 함수
function closeSidebar() {
  /* 1. 사이드바 */
  const $hamburgerBtn = $('.ico-hamburger'); // 햄버거 버튼
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴

  $dimOverlay.removeClass('active');
  $sidebar.removeClass('active');
  $('body').removeClass('no-scroll');

  // 접근성 속성 및 inert 제거
  $sidebar.removeAttr('role aria-modal');

  if ('inert' in HTMLElement.prototype) {
    $('body > *').removeAttr('inert');
  } else {
    removeInertPolyfill();
  }

  $hamburgerBtn.focus();
  document.removeEventListener('keydown', handleKeydown);
}

// 상태 초기화 함수
function removeActiveClasses() {
  /* 1. 사이드바 */
  const $hamburgerBtn = $('.ico-hamburger'); // 햄버거 버튼
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴

  $dimOverlay.removeClass('active');
  $sidebar.removeClass('active');

  // 접근성 속성 및 inert 제거
  $sidebar.removeAttr('role aria-modal');

  if ('inert' in HTMLElement.prototype) {
    $('body > *').removeAttr('inert');
  } else {
    removeInertPolyfill();
  }

  if (!document.querySelector('.modal[style*="display: block"]')) {
    $('body').removeClass('no-scroll'); // 열린 모달이 없을 때만 스크롤 활성화
  }

  $hamburgerBtn.focus();
}

// inert 폴리필 함수
function applyInertPolyfill() {
  /* 1. 사이드바 */
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴

  // 사이드바와 햄버거 버튼을 제외한 모든 요소
  const elements = $('body > *').not($sidebar).not($sidebar.parents()).not($dimOverlay);

  elements.each(function() {
    $(this).attr('aria-hidden', 'true');

    // 요소 내의 모든 포커스 가능한 요소 비활성화
    $(this).find('a, button, input, select, textarea, [tabindex]').each(function() {
      if (!$(this).data('original-tabindex')) {
        $(this).data('original-tabindex', $(this).attr('tabindex') || null);
      }
      $(this).attr('tabindex', '-1');
    });
  });
}

// inert 폴리필 제거 함수
function removeInertPolyfill() {
  $('[aria-hidden="true"]').removeAttr('aria-hidden');

  // 원래 tabindex 복원
  $('[data-original-tabindex]').each(function() {
    const originalValue = $(this).data('original-tabindex');
    if (originalValue === null) {
      $(this).removeAttr('tabindex');
    } else {
      $(this).attr('tabindex', originalValue);
    }
    $(this).removeData('original-tabindex');
  });
}

/* 2. [공통]상단 글씨크기 변경 */
function updateButtons(sizeToShow) {
  // classMap을 통해 버튼 클래스를 적절히 매핑
  const $buttons = $('.txt-size-btn');
  const classMap = { small: 'sm', normal: 'rg', large: 'lg' };

  $buttons.each((_, button) => {
    const $button = $(button);

    // 클래스 매핑에 따라 버튼 노출 설정
    if ($button.hasClass(classMap[sizeToShow])) {
      $button.show(); // 다음 버튼 노출
    } else {
      $button.hide(); // 나머지 버튼 숨김
    }
  });
}

function changeTextSize(size) {
  const $body = $('body');
  const validSizes = ['small', 'normal', 'large'];
  if (!validSizes.includes(size)) return;

  // 텍스트 크기 적용
  $body.attr('data-text-size', size);

  // localStorage에 현재 상태 저장
  localStorage.setItem('textSize', size);

  // 사이즈 순환 계산
  const sizes = ['small', 'normal', 'large'];
  const nextSize = sizes[(sizes.indexOf(size) + 1) % sizes.length];

  // 버튼 상태 갱신
  updateButtons(nextSize);
}

function initializeTextSize() {
  // localStorage에서 저장된 글자 크기 가져오기
  const savedSize = localStorage.getItem('textSize') || 'normal';
  // 초기화: 변경 로직 호출
  changeTextSize(savedSize);
}


/* 3. [공통]모달 관련 함수 */
// 모달 크기 조정 및 회전 처리
let currentDeviceType = '';
function adjustModalSize(modalId, options = {}) {
  if (!document.body.classList.contains('no-scroll')) {
    document.body.classList.add('no-scroll');
  }
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const modalContent = modal.querySelector('.modal-content');
  const modalBody = modalContent?.querySelector('.modal-body');
  const modalType = modal?.dataset.modalType;

  if (!modalContent) return;

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // 현재 디바이스 타입 판단
  let newDeviceType = '';
  if (viewportWidth <= 767) {
    newDeviceType = 'mobile';
  } else if (viewportWidth > 767 && viewportWidth <= 1200) {
    newDeviceType = 'tablet';
  } else {
    newDeviceType = 'pc';
  }

  // 타입이 변하지 않았다면, 아무것도 안함
  if (currentDeviceType !== newDeviceType) {
    currentDeviceType = newDeviceType;
  }

  // 타입이 변했다면, 업데이트
  currentDeviceType = newDeviceType;

  // 여기부터 기존 스타일 초기화
  modalContent.style.width = '';
  modalContent.style.maxWidth = '';
  modalContent.style.height = '';
  modalContent.style.transform = '';
  modalContent.style.transformOrigin = '';
  modalContent.style.padding = '';
  modalContent.style.borderRadius = '';

  if (modalBody) {
    modalBody.style.height = '';
    modalBody.style.maxHeight = '';
    modalBody.style.overflow = '';
    modalBody.style.webkitOverflowScrolling = '';
  }

  // safeAreaHeight 계산
  const getActualViewportHeight = () => {
    const test = document.createElement('div');
    test.style.position = 'fixed';
    test.style.height = '100vh';
    test.style.width = '0';
    test.style.top = '0';
    document.documentElement.appendChild(test);
    const vh = test.offsetHeight;
    document.documentElement.removeChild(test);
    return vh;
  };
  const safeAreaHeight = Math.min(viewportHeight, getActualViewportHeight());

  // 디바이스 타입별 스타일 적용
  if (newDeviceType === 'mobile') {
    if (modalType === 'fixed-btn-ver') {
      modalContent.style.width = `${viewportWidth}px`;
      // modalContent.style.width = `50px`;
      modalContent.style.height = `${safeAreaHeight}px`;
      modalContent.style.maxWidth = '100%';

      if (modalBody) {
        modalBody.style.height = `${safeAreaHeight - 48}px`;
        modalBody.style.paddingBottom = `64px`;
        modalBody.style.overflow = 'auto';
        modalBody.style.webkitOverflowScrolling = 'touch';
      }
    } else if (modalType === 'fixed-btn-height-ver') {
      modalContent.style.width = `${viewportWidth}px`;
      // modalContent.style.width = `50px`;
      modalContent.style.height = `${safeAreaHeight}px`;
      modalContent.style.maxWidth = '100%';

      if (modalBody) {
        modalBody.style.height = `${safeAreaHeight - 48}px`;
        modalBody.style.minHeight = `80vh`;
        modalBody.style.paddingBottom = `64px`;
        modalBody.style.overflow = 'auto';
        modalBody.style.webkitOverflowScrolling = 'touch';
      }
    } else if (modalType === 'rotate-ver') {
      modalContent.style.width = `${safeAreaHeight - 32}px`;
      modalContent.style.height = `${viewportWidth - 32}px`;
      modalContent.style.transform = 'translate(-50%, -50%) rotate(-90deg)';
      modalBody.style.maxHeight = 'none';
      modalBody.style.height = 'calc(100% - 52px)'
      modalContent.style.transformOrigin = 'center';
      modalContent.style.borderRadius = '8px';
      modalContent.style.padding = '48px 0 0 0';
    } else if (modalType !== 'absolute-ver' && modalType !== 'confirm-ver') {
      modalContent.style.width = `${viewportWidth}px`;
      modalContent.style.height = `${safeAreaHeight}px`;

      if (modalBody) {
        modalBody.style.height = `${safeAreaHeight - 48}px`;
        modalBody.style.overflow = 'auto';
        modalBody.style.webkitOverflowScrolling = 'touch';
      }
    }else if(modalType === 'confirm-ver') {
      modalContent.style.width = 'calc(100% - 32px)';
      modalContent.style.maxWidth = '500px';
      modalContent.style.height = 'auto';

      if (modalBody) {
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    }
  }

  if (newDeviceType === 'tablet') {
    if (modalType === 'absolute-ver') {
      modalContent.style.width = '100%';
      modalContent.style.maxWidth = '100%';
      modalContent.style.height = 'auto';

      if (modalBody) {
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    } else if (modalType === 'rotate-ver') {
      modalContent.style.width = '90%';
      modalContent.style.maxWidth = '100%';
      modalContent.style.height = 'auto';

      if (modalBody) {
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    } else if ( modalId === 'modal-discountCheck') {
      modalContent.style.width = '100%';
      modalContent.style.maxWidth = '90%';
      modalContent.style.height = 'auto';

      if (modalBody) {
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    } else if(modalType === 'confirm-ver') {
      modalContent.style.width = '100%';
      modalContent.style.maxWidth = '600px';
      modalContent.style.height = 'auto';

      if (modalBody) {
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    } else if(modalType !== 'confirm-ver') {
      modalContent.style.width = 'calc(100% - 32px)';
      modalContent.style.maxWidth = '100%';
      modalContent.style.height = 'auto';

      if (modalBody) {
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    }
  }

  if (newDeviceType === 'pc') {
    if (modalType === 'rotate-ver') {
      modalContent.style.width = '100%';
      modalContent.style.maxWidth = '600px';
      modalContent.style.height = 'auto';
      modalContent.style.transform = 'translate(-50%, -50%)';
      modalContent.style.borderRadius = '8px';
      modalContent.style.padding = '64px 0 0 0';
    } else {
      if (modalContent.classList.contains('lg')) {
        modalContent.style.maxWidth = '1200px';
      } else if (modalContent.classList.contains('sm')) {
        modalContent.style.maxWidth = '600px';
      } else if (modalContent.classList.contains('xs')) {
        if (modalType === 'absolute-ver') {
          modalContent.style.maxWidth = '100%';
          modalContent.style.width = '100%';
        }
        modalContent.style.maxWidth = '400px';
      } else {
        modalContent.style.maxWidth = '800px';
      }
      modalContent.style.width = '100%';
      modalContent.style.height = 'auto';

      if (modalBody) {
        if(modalContent.classList.contains('fixed-height')) {
          modalBody.style.minHeight = '80vh';
        }
        modalBody.style.height = 'auto';
        modalBody.style.maxHeight = '80vh';
        modalBody.style.overflow = 'auto';
      }
    }
  }
}

// -------- 모달 띄우기 함수 ------------
// 현재 열린 모달들을 스택으로 관리
let modalStack = []; // 모달 스택
function showModal(modalId,options={}) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const overlay = document.getElementById('overlay');
  const currentOpenModal = modalStack.length > 0 ? document.getElementById(modalStack[modalStack.length - 1]) : null;

  // 1. 기존 열려 있는 모달 비활성화
  if (currentOpenModal) {
    currentOpenModal.setAttribute('aria-hidden', 'true'); // 비활성화
    currentOpenModal.style.zIndex = '100001';// 아래로 이동
  }

  // 2. 새롭게 열리는 모달 활성화
  document.body.classList.add('no-scroll');
  modal.style.display = 'block';
  modal.style.zIndex = '100002';
  modal.setAttribute('aria-hidden', 'false');

  modalStack.push(modalId); // 스택에 모달 ID 추가

  // 3. 사이드바 상태 관리
  const sidebar = document.querySelector('.sidebar.active');
  if (sidebar) {
    // 사이드바 비활성화 처리
    removeInertFromSideBar(sidebar);
  }

  // 3-1. 모달별
  if (modalId === 'modal-curriculum') {
    const insertContent = modal.querySelector('.insert-content');
    if (!insertContent) {
      // console.error('모달 내에 .insert-content 요소를 찾을 수 없습니다.');
      return;
    }

    // courseName 가져오기 (options에서 먼저 확인, 없으면 버튼에서 확인)
    let courseName = '';
    if (options.courseName) {
      courseName = options.courseName;
    } else if (options.triggerElement) {
      courseName = options.triggerElement.getAttribute('data-course');
    }

    // console.log('코스 이름:', courseName);

    // courseName이 있을 때만 처리
    if (courseName) {
      let courseHtml = '';

      if (courseName === 'courseBundang') {
        console.log('분당 코스 선택됨');
        courseHtml = courseBundang;
      } else if (courseName === 'courseOlympic') {
        console.log('올림픽 코스 선택됨');
        courseHtml = courseOlympic;
      } else if (courseName === 'courseIlsan') {
        console.log('일산 코스 선택됨');
        courseHtml = courseIlsan;
      }

      // HTML이 제대로 생성되었는지 확인
      console.log('생성된 HTML:', courseHtml);

      // HTML 직접 삽입
      if (courseHtml) {
        insertContent.innerHTML = courseHtml;
      } else {
        console.warn(`${courseName}에 해당하는 HTML을 찾을 수 없습니다.`);
      }
    } else {
      console.warn('courseName이 제공되지 않았습니다.');
    }
  }



  // 4. 모달 위치 조정 (옵션에 따라 스타일 변경)
  if (window.innerWidth > 1200 && options.absolute && options.triggerElement) {
    const rect = options.triggerElement.getBoundingClientRect();
    modal.style.position = 'absolute';
    modal.style.left = `${rect.left}px`;
    modal.style.top = `${rect.bottom + window.scrollY}px`;
  } else {
    // 1200 이상일 때는 위치를 reset하거나 다른 스타일 적용
    modal.style.position = ''; // 자바스크립트로 지정한 위치를 리셋
    modal.style.left = '';
    modal.style.top = '';
  }

  // 오버레이 활성화
  if (modal.classList.contains('no-dim')) {
    if(modal.id === 'modal-virtualKeyboard') {
      overlay?.classList.add('transparent');
    }
    overlay?.classList.add('active');
  }

  // 모달 내 tab-wrap이 있는지 체크하고 높이 업데이트 호출
  const tabWraps = modal.querySelectorAll('.tab-wrap');
  if (tabWraps.length > 0) {
    console.log(`${modalId} 모달에 tab-wrap이 있습니다. 높이 업데이트 실행.`);
    const tabManager = new TabManager();
    setTimeout(() => {
      tabManager.updateHeight(modalId); // 특정 모달 내 tab-wrap 높이 업데이트
    }, 0);
  } else {
    console.log(`${modalId} 모달에 tab-wrap이 없습니다.`);
  }

  // 포커스 트랩 설정
  handleFocusTrap(modal);

  if (window.innerWidth <= 1200) {
    adjustModalSize(modalId);
  }
  // ✅ 변경된 부분: 열려 있는 모든 팝업에 `adjustModalSize` 호출
  modalStack.forEach((id) => {
    adjustModalSize(id, options);
  });
}
// 모달 안 focus 가능한 영역 확인 코드 : 최상단 모달에서만 tab키를 눌러도 반응해야하는게 목적
const handleFocusTrap = (modal) => {
  const getFocusableElements = () => {
    return Array.from(
      modal.querySelectorAll(`
        button:not([disabled]),
        [href]:not([aria-hidden="true"]),
        input:not([disabled]):not([type="hidden"]),
        select:not([disabled]),
        textarea:not([disabled]),
        [tabindex]:not([tabindex="-1"]),
        .custom-select .select-list[aria-hidden="false"] li button,
        .custom-select .select-list[aria-hidden="false"] li a
      `)
    ).filter((el) => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        style.opacity !== '0'
      );
    });
  };

  // 모달별 isEnforcingFocus 상태를 추가
  if (!modal._isEnforcingFocus) {
    modal._isEnforcingFocus = false;
  }

  const enforceFocus = (e) => {
    const isTopModal = modalStack[modalStack.length - 1] === modal.id;
    const activeElement = document.activeElement;

    if (!isTopModal || modal._isEnforcingFocus) return;

    if (!modal.contains(e.target)) {
      e.preventDefault();
      modal._isEnforcingFocus = true;

      if (activeElement && activeElement.closest('.custom-select')) {
        activeElement.focus(); // select 열려있는 경우 그대로 유지
      } else {
        const firstFocusable = getFocusableElements()[0];
        firstFocusable?.focus(); // 최신 요소 기준으로
      }

      setTimeout(() => {
        modal._isEnforcingFocus = false;
      }, 0);
    }
  };

  const keydownHandler = (e) => {
    if (e.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const currentIndex = focusableElements.indexOf(document.activeElement);
    if (currentIndex === -1) {
      requestAnimationFrame(() => {
        focusableElements[0]?.focus();
      });
      return;
    }

    e.preventDefault();

    let nextIndex;
    if (e.shiftKey) {
      nextIndex = currentIndex - 1 < 0 ? focusableElements.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex + 1 >= focusableElements.length ? 0 : currentIndex + 1;
    }

    requestAnimationFrame(() => {
      focusableElements[nextIndex]?.focus();
    });
  };

  // 기존 이벤트 제거
  if (modal._enforceFocusHandler) {
    document.removeEventListener('focus', modal._enforceFocusHandler, true);
    document.removeEventListener('keydown', modal._keydownHandler, true);
  }

  // 새 이벤트 등록
  document.addEventListener('focus', enforceFocus, true);
  document.addEventListener('keydown', keydownHandler, true);

  // 핸들러 참조 저장
  modal._enforceFocusHandler = enforceFocus;
  modal._keydownHandler = keydownHandler;

  // 모달 열릴 때 첫 포커스
  setTimeout(() => {
    const firstFocusable = getFocusableElements()[0];
    firstFocusable?.focus();
  }, 0);
};
// 모달 숨기기 함수
function hideModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) return;
  // resetModalFields(modal);

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  // 스택에서 제거
  modalStack = modalStack.filter((id) => id !== modalId);

  // 포커스 트랩 제거
  if (modal._enforceFocusHandler) {
    document.removeEventListener('focus', modal._enforceFocusHandler, true);
    document.removeEventListener('keydown', modal._keydownHandler, true);
    delete modal._enforceFocusHandler;
    delete modal._keydownHandler;
  }

  // 오버레이 제거 (선택적)
  const overlay = document.getElementById('overlay');

  // overlay가 존재하는 경우에만 실행
  if (overlay || overlay.classList.contains('transparent')) {
    overlay.classList.remove('transparent');
    overlay.classList.remove('active');
  }

  // 아래 모달 다시 포커싱 가능하도록 처리
  const prevModalId = modalStack[modalStack.length - 1];
  if (prevModalId) {
    const prevModal = document.getElementById(prevModalId);
    if (prevModal) {
      prevModal.setAttribute('aria-hidden', 'false');
      handleFocusTrap(prevModal); // ← 💡여기서 포커스트랩 재설정!
      requestAnimationFrame(() => {
        const firstFocusable = prevModal.querySelector(
          'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus(); // optional
      });
    }
  } else {
    // ✅ 모달이 모두 닫혔을 때 사이드바 상태 확인
    const sidebar = document.querySelector('.sidebar.active');
    if (sidebar) {
      sidebar.setAttribute('aria-hidden', 'false'); // 사이드바 활성화
      removeInertFromSideBar(sidebar); // Sidebar의 inert 복원 처리

      // 사이드바 포커스 트랩 다시 설정
      trapFocus(sidebar);
      requestAnimationFrame(() => {
        const firstFocusable = sidebar.querySelector(
          'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      });
    }
  }


  // 모달이 하나도 남지 않았다면 no-scroll 클래스 제거
  if (modalStack.length === 0 &&  !document.querySelector('.sidebar')?.classList.contains('active')) {
    document.body.classList.remove('no-scroll');
  }
}
// 🔧 사이드바의 inert 복원 처리 함수
function removeInertFromSideBar(sidebar) {
  const inertElements = document.querySelectorAll('[inert]');
  inertElements.forEach((el) => {
    // 사이드바 외 요소는 계속 inert 유지 (모달이 닫혀도 여전히 비활성화 필요)
    if (!sidebar.contains(el)) {
      el.removeAttribute('inert');
    }
  });
}

// 모달 안 인풋 관련 값 리셋 함수
function resetModalFields(modal) {
  if (!modal) return;

  // 모든 input, select, textarea 초기화
  const inputs = modal.querySelectorAll('input, select, textarea');

  inputs.forEach((el) => {
    if (el.tagName === 'INPUT') {
      const type = el.type;
      if (type === 'checkbox' || type === 'radio') {
        el.checked = false;
      } else if (type !== 'button' && type !== 'submit' && type !== 'reset') {
        el.value = '';
      }
    } else if (el.tagName === 'SELECT') {
      el.selectedIndex = 0;
    } else if (el.tagName === 'TEXTAREA') {
      el.value = '';
    }
  });

  // 필요 시 추가적으로 리셋할 항목들
  const customSelects = modal.querySelectorAll('.custom-select .selected');
  customSelects.forEach(el => {
    el.textContent = ''; // 선택된 값 비우기
  });

  // 클래스나 스타일 초기화 등도 여기에 포함 가능
}

let isMobile;
function removeItem(modalId, targetRowElement) {
  const modal = document.getElementById(modalId); // modalId로 모달 요소 찾기
  const target = document.getElementById(targetRowElement)
  if (!modal) {
    alert('모달을 찾을 수 없습니다.');
    return;
  }

  if (target) {
    target.remove(); // 대상 행 삭제
    setTimeout(function() {
      updateTabHeights(modalId,isMobile); // 탭 높이 업데이트
      alert('선택한 행이 삭제되었습니다!');
    },0)

  } else {
    alert('삭제할 행을 찾을 수 없습니다.');
  }
}


/**
 * 탭의 높이를 계산하는 함수
 * @param {HTMLElement} wrap - 각 탭의 래퍼 요소 (.tab-wrap)
 * @param {String|null} modalId - 특정 모달 ID (null이면 일반 탭-wrap)
 * @param {Boolean} isMobile - 현재 화면이 모바일인지 여부
 * @returns {Number|null} 계산된 높이 (없으면 null 반환)
 */
function calculateTabHeight(wrap, modalId, isMobile) {
  const activeTab = wrap.querySelector('.first-depth > li.active .tab-box'); // 활성화된 탭 찾기
  if (!activeTab) return null;

  const tabBoxHeight = activeTab.offsetHeight; // 활성 탭의 높이
  const listLength = wrap.querySelectorAll('.first-depth > li').length;

  const isInModal = modalId && wrap.closest(`#${modalId}`); // 모달 내부인지 확인

  const topSpacing =
    listLength <= 1
      ? 0
      : isInModal
        ? 84
        : isMobile
          ? 84
          : 104;
  console.log(isMobile)
  console.log(topSpacing,'fsdkjjsfkjsd')
  console.log(tabBoxHeight,'tabBoxHeight')
  console.log(topSpacing,'topSpacing')

  return tabBoxHeight + topSpacing; // 계산된 높이 반환
}

/**
 * 탭 높이를 업데이트하는 함수
 * @param {String|null} modalId - 특정 모달 ID (null이면 일반 탭-wrap)
 * @param {Boolean} isMobile - 현재 화면이 모바일인지 여부
 */
function updateTabHeights(modalId = null, isMobile) {

  const tabWrapSelector = modalId
    ? `#${modalId}.tab-wrap`
    : '.tab-wrap';

  const tabWraps = document.querySelectorAll(tabWrapSelector);

  if (!tabWraps.length) {
    console.log('tab-wrap 요소가 없습니다.');
    return;
  }

  // .tab-wrap 요소별로 높이를 계산하고 반영
  tabWraps.forEach(wrap => {
    const calculatedHeight = calculateTabHeight(wrap, modalId, isMobile);
    if (calculatedHeight !== null) {
      wrap.style.height = `${calculatedHeight}px`;
    }
  });
}

/* 4. 탭 관련 함수 */
class TabManager {
  constructor() {
    this.isMobile = window.innerWidth <= 767;
    this.tabSets = new Map(); // Map을 명시적으로 초기화
    this.init();

    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 767;

      document.querySelectorAll('.tab-wrap').forEach(wrap => {
        const tabType = wrap.getAttribute('data-tab');
        const firstDepth = wrap.querySelector('.first-depth');

        if (!firstDepth) return;

        if (tabType === 'fraternal') {
          if (!wasMobile && this.isMobile) {
            this.moveActiveTabToTop(wrap);
          } else if (wasMobile && !this.isMobile) {
            this.restoreOriginalOrder(wrap);
          }
        }
      });

      this.updateHeight();
    });
  }

  // 각 탭 세트의 ID 생성
  getTabSetId(wrap) {
    // 이미 ID가 있으면 사용, 없으면 data-tab 속성과 랜덤 값을 합쳐 고유 ID 생성
    if (!wrap.dataset.tabSetId) {
      const tabType = wrap.getAttribute('data-tab') || 'unknown';
      wrap.dataset.tabSetId = `${tabType}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    }
    return wrap.dataset.tabSetId;
  }

  // 탭 세트별로 초기 순서 저장
  saveOriginalOrder(wrap, firstDepth) {
    if (!firstDepth) return;

    // this.tabSets가 정의되어 있는지 확인
    if (!this.tabSets) {
      this.tabSets = new Map();
    }

    const id = this.getTabSetId(wrap);

    if (!this.tabSets.has(id)) {
      this.tabSets.set(id, {
        originalOrder: Array.from(firstDepth.children).map(li => li.cloneNode(true))
      });
    }
  }

  // 탭 세트별로 원래 순서 복원
  restoreOriginalOrder(wrap) {
    // this.tabSets가 정의되어 있는지 확인
    if (!this.tabSets) {
      console.warn('tabSets가 초기화되지 않았습니다.');
      return;
    }

    const id = this.getTabSetId(wrap);
    const tabSetData = this.tabSets.get(id);

    if (!tabSetData || !tabSetData.originalOrder) {
      console.warn(`저장된 탭 세트 데이터가 없습니다. ID: ${id}`);
      return;
    }

    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    if (wrap.getAttribute('data-tab') === 'fraternal') {
      console.log(`${id} 탭 세트의 초기 순서 복원 중...`);

      // 현재 활성화된 탭 찾기
      const currentActiveTab = wrap.querySelector('.first-depth > li.active .tab');
      const currentActiveTabId = currentActiveTab ? currentActiveTab.textContent.trim() : null;

      firstDepth.innerHTML = '';

      // 원래 순서로 복원하지만 active 클래스는 모두 제거
      tabSetData.originalOrder.forEach(li => {
        const newLi = li.cloneNode(true);
        newLi.classList.remove('active'); // 모든 active 클래스 제거
        firstDepth.appendChild(newLi);
      });

      // 현재 활성화된 탭 텍스트와 일치하는 탭을 찾아 active로 설정
      if (currentActiveTabId) {
        const tabs = wrap.querySelectorAll('.first-depth > li .tab');
        for (const tab of tabs) {
          if (tab.textContent.trim() === currentActiveTabId) {
            const tabItem = tab.closest('li');
            tabItem.classList.add('active');

            // 해당 tab-box 표시
            const tabBox = tabItem.querySelector('.tab-box');
            if (tabBox) {
              tabBox.style.display = 'block';
            }
            break;
          }
        }
      }

      this.reattachEventListeners();
      this.updateHeight();
    }
  }

  moveActiveTabToTop(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const activeTab = wrap.querySelector('.first-depth > li.active');
    if (activeTab && this.isMobile && wrap.getAttribute('data-tab') === 'fraternal') {
      firstDepth.insertBefore(activeTab, firstDepth.firstChild);
    }
  }

  attachEventListeners(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const tabs = wrap.querySelectorAll('.first-depth > li .tab');
    const tabType = wrap.getAttribute('data-tab');
    const tabSingle = wrap.getAttribute('data-single');

    // 모바일 환경에서 탭 키 네비게이션을 위한 tabindex 설정
    if (tabType === 'fraternal') {
      this.updateTabindexes(wrap);

      // opened 클래스가 변경될 때마다 tabindex 업데이트
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' &&
            mutation.attributeName === 'class' &&
            firstDepth === mutation.target) {
            this.updateTabindexes(wrap);
          }
        });
      });

      observer.observe(firstDepth, { attributes: true });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (tabType === 'fraternal' && this.isMobile) {
          if (firstDepth.classList.contains('opened')) {
            console.log('activate1')

            this.activateTab(tab);
            firstDepth.classList.remove('opened');

            // 클릭한 탭에 포커스 유지 (이 부분만 추가)
            setTimeout(() => {
              tab.focus();
            }, 0);
          } else {
            firstDepth.classList.add('opened');
          }
        } else if(tabSingle === 'aa') {

          this.activateTab(tab, tabType,tabSingle);


        } else
        {
          this.activateTab(tab, tabType);
        }
      });

      tab.addEventListener('focus', () => {
        if (tabType !== 'fraternal' || !this.isMobile) {
          this.activateTab(tab, tabType);
        }
      });
    });
  }

// 탭의 tabindex를 업데이트하는 새로운 메서드
  updateTabindexes(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const isOpened = firstDepth.classList.contains('opened');
    const tabType = wrap.getAttribute('data-tab');

    if (tabType === 'fraternal' && this.isMobile) {
      const tabs = wrap.querySelectorAll('.first-depth > li .tab');

      if (isOpened) {
        // 열린 상태에서는 모든 탭에 탭 포커스 활성화
        tabs.forEach(tab => {
          tab.setAttribute('tabindex', '0');
        });
      } else {
        // 닫힌 상태에서는 활성화된 탭만 탭 포커스 활성화
        tabs.forEach(tab => {
          const isActive = tab.closest('li').classList.contains('active');
          tab.setAttribute('tabindex', isActive ? '0' : '-1');
        });
      }
    }
  }

// init 함수의 끝부분에 다음 코드 추가
  reattachEventListeners() {
    document.querySelectorAll('.tab-wrap').forEach(wrap => {
      this.attachEventListeners(wrap);
    });
  }

  init() {
    // Map 초기화 확인
    if (!this.tabSets) {
      this.tabSets = new Map();
    }

    const tabWraps = document.querySelectorAll('.tab-wrap');

    tabWraps.forEach((wrap, index) => {
      const tabType = wrap.getAttribute('data-tab');

      const firstDepth = wrap.querySelector('.first-depth');
      /*if (!firstDepth) {
        console.warn(`탭 랩 #${index}에 .first-depth 요소가 없습니다!`);
        return;
      }*/

      // 초기 순서 저장 - 수정된 메서드 호출
      this.saveOriginalOrder(wrap, firstDepth);

      const tabs = wrap.querySelectorAll('.first-depth > li .tab');
      if (tabs.length <= 1) {
        // 탭 버튼이 하나라면 숨기기
        firstDepth.classList.add('only');
      } else {
        firstDepth.classList.remove('only');
      }

      const tabBoxes = wrap.querySelectorAll('.tab-box');

      // 초기에 모든 tab-box 숨기기
      tabBoxes.forEach(box => box.style.display = 'none');

      // 활성 탭의 tab-box 보이기
      const activeTabBox = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTabBox) {
        activeTabBox.style.display = 'block';

        // fraternal 타입 모바일일 경우만 초기에 활성 탭을 최상단으로 이동
        if (tabType === 'fraternal' && this.isMobile) {
          const activeTab = activeTabBox.closest('li');
          firstDepth.insertBefore(activeTab, firstDepth.firstChild);
        }
      } else {
        console.log(`활성 탭 박스를 찾을 수 없음`);
      }

      // 각 탭 랩에 이벤트 리스너 부착
      this.attachEventListeners(wrap);

      // 모바일에서 외부 클릭 시 목록 닫기 (fraternal 타입만)
      if (tabType === 'fraternal') {
        document.addEventListener('click', (e) => {
          if (this.isMobile && !wrap.contains(e.target)) {
            firstDepth.classList.remove('opened');
          }
        });
      }
    });
    this.updateHeight();
  }

  activateTab(selectedTab, tabType) {
    const wrap = selectedTab.closest('.tab-wrap');
    if (!wrap) return;

    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const allTabs = wrap.querySelectorAll('.first-depth > li');
    tabType = tabType || wrap.getAttribute('data-tab');

    // 모든 탭 비활성화 및 tab-box 숨기기
    allTabs.forEach(tab => {
      tab.classList.remove('active');
      const tabBox = tab.querySelector('.tab-box');
      if (tabBox) {
        tabBox.style.display = 'none';
      }
    });

    // 선택된 탭 활성화 및 tab-box 보이기
    const activeTabItem = selectedTab.closest('li');
    activeTabItem.classList.add('active');
    if(activeTabItem.dataset.selectedTab === 'cancel') {
      changeButtonStateAndEvent('modal-courseChange','cancel')
    } else if(activeTabItem.dataset.selectedTab === 'delay') {
      changeButtonStateAndEvent('modal-courseChange','delay')
    }

    const activeTabBox = activeTabItem.querySelector('.tab-box');
    if (activeTabBox) {
      activeTabBox.style.display = 'block';
    }

    // fraternal 타입의 모바일에서만 선택된 탭을 최상단으로 이동
    if (tabType === 'fraternal' && this.isMobile) {
      const parent = activeTabItem.parentNode;
      parent.insertBefore(activeTabItem, parent.firstChild);
    }

    setTimeout(() => this.updateHeight(), 0);
  }

  updateHeight(modalId = null) {
    // 대상 선택: modalId가 있으면 특정 모달 내부의 tab-wrap만 선택
    const tabWrapSelector = modalId
      ? `#${modalId} .tab-wrap` // 특정 모달 안의 .tab-wrap
      : '.tab-wrap';            // 모든 .tab-wrap

    console.log(tabWrapSelector)
    // 선택된 tab-wrap 요소
    const tabWraps = document.querySelectorAll(tabWrapSelector);

    // tab-wrap이 존재하지 않으면 아무 작업도 하지 않음
    if (!tabWraps.length) {
      console.log('tab-wrap 요소가 없습니다.');
      return;
    }

    // 각 tab-wrap의 높이 계산 및 업데이트
    tabWraps.forEach(wrap => {
      const activeTab = wrap.querySelector('.first-depth > li.active .tab-box'); // 활성화된 탭 찾기
      if (activeTab) {
        const tabBoxHeight = activeTab.offsetHeight; // 활성 탭의 높이
        // modal 내부인지 확인하는 조건
        const isInModal = modalId && wrap.closest(`#${modalId}`);
        const listLength = wrap.querySelectorAll('.first-depth > li').length;

        /* tab의 수가 1이하인 경우 상단에 버튼을 가리기위해 0 높이 더함 /
        *  나머지의 경우 pc / mobile 에 따라 차등을 두어 값 적용
        *  */
        const topSpacing =
          listLength <= 1
            ? 0
            : isInModal
              ? 84
              : this.isMobile
                ? 84
                : 104;

        wrap.style.height = `${tabBoxHeight + topSpacing}px`; // 계산된 높이 설정
      }
    });
  }
}
function changeButtonStateAndEvent(modalId, selectedTabName) {
  const modal = document.getElementById(modalId); // 해당 모달 가져오기
  if (!modal) {
    console.warn(`모달 ID(${modalId})를 찾을 수 없습니다.`);
    return;
  }

  // 버튼 가져오기
  const button = modal.querySelector('#actionButton');
  if (!button) {
    console.warn(`${modalId} 모달에 버튼이 없습니다.`);
    return;
  }

  // 현재 활성 탭에서 모든 체크박스 확인
  const activeTab = modal.querySelector(`li[data-selected-tab="${selectedTabName}"]`);
  if (!activeTab) {
    console.warn(`활성화된 탭(${selectedTabName})을 찾을 수 없습니다.`);
    return;
  }

  const checkboxes = activeTab.querySelectorAll('input[type="checkbox"]');
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked); // 체크박스가 체크되었는지 확인

  // 버튼 비활성화/활성화 처리
  button.disabled = !isChecked;

  // 버튼 텍스트 수정 로직
  if (selectedTabName === 'delay') {
    button.textContent = '연기 신청하기';
    button.onclick = () => {
      console.log('연기 신청하기 버튼이 클릭되었습니다.');
      // 여기에 연기 신청하기 로직 추가
    };
  } else if (selectedTabName === 'cancel') {
    button.textContent = '취소 신청하기';
    button.onclick = () => {
      console.log('취소 신청하기 버튼이 클릭되었습니다.');
      // 여기에 취소 신청하기 로직 추가
    };
  } else {
    console.warn(`알 수 없는 탭 이름(${selectedTabName})입니다.`);
  }
}

/**
 * 버튼 상태를 업데이트 (텍스트 변경 및 이벤트 핸들러 설정)
 */
/**
 * 체크박스 클릭 시 버튼 상태를 업데이트
 * @param {string} modalId - 해당 모달 ID
 * @param {string} selectedTabName - 현재 활성화된 탭 이름 (delay 또는 cancel)
 */
function handleCheckboxClick(modalId, selectedTabName) {
  const modal = document.getElementById(modalId); // 모달 Element 가져오기
  if (!modal) {
    console.warn(`모달 ID(${modalId})를 찾을 수 없습니다.`);
    return;
  }

  // 버튼 가져오기
  const button = modal.querySelector('#actionButton');
  if (!button) {
    console.warn(`${modalId} 모달에 버튼이 없습니다.`);
    return;
  }

  // 해당 탭 찾기
  const activeTab = modal.querySelector(`li[data-selected-tab="${selectedTabName}"]`);
  if (!activeTab) {
    console.warn(`활성화된 탭(${selectedTabName})을 찾을 수 없습니다.`);
    return;
  }

  // 체크박스 상태 확인
  const checkboxes = activeTab.querySelectorAll('input[type="checkbox"]');
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked); // 하나라도 체크되어 있는지 확인

  // 버튼 활성화 여부
  button.disabled = !isChecked;

  // 버튼 텍스트 및 동작 업데이트
  if (selectedTabName === 'delay') {
    button.textContent = '연기 신청하기';
    button.onclick = () => {
      console.log('연기 신청하기 버튼 클릭');
      // 연기 신청 로직 추가
    };
  } else if (selectedTabName === 'cancel') {
    button.textContent = '취소 신청하기';
    button.onclick = () => {
      console.log('취소 신청하기 버튼 클릭');
      // 취소 신청 로직 추가
    };
  } else {
    console.warn(`알 수 없는 탭 이름(${selectedTabName})입니다.`);
  }
}
/* 5. 수강신청 관련 탭 함수 - 인덱스를 매개변수로 받도록 수정 */
// openTab 함수 수정
function openTab(tabIndex) {
  const tab = document.querySelector('.f-modal');
  // 모달 열기 전에 data-focus-trap 속성 초기화
  tab.removeAttribute('data-focus-trap');

  tab.classList.add('active');
  document.body.classList.add('no-scroll');

  // 모든 탭 선택
  const allTabs = tab.querySelectorAll('.check-scroll > ul > li');
  if (allTabs.length > 0) {
    // 인덱스 유효성 검사
    if (tabIndex === undefined || tabIndex < 0 || tabIndex >= allTabs.length) {
      tabIndex = 0; // 잘못된 인덱스인 경우 첫 번째 탭 사용
    }

    // 모든 탭에서 active 제거
    allTabs.forEach((tabItem) => {
      tabItem.classList.remove('active');

      // 각 탭의 버튼에서도 active 클래스 제거
      const btn = tabItem.querySelector('.check-tab-btn');
      if (btn) {
        btn.classList.remove('active');
      }

      // 콘텐츠 높이 초기화
      const content = tabItem.querySelector('.sub-tab-content');
      if (content) {
        content.style.height = '';
      }
    });

    // 선택한 탭만 활성화
    allTabs[tabIndex].classList.add('active');

    // 선택한 탭의 버튼도 활성화
    const selectedBtn = allTabs[tabIndex].querySelector('.check-tab-btn');
    if (selectedBtn) {
      selectedBtn.classList.add('active');
    }

    // 선택한 탭의 내용을 표시 (모바일인 경우)
    const selectedContent = allTabs[tabIndex].querySelector('.sub-tab-content');
    if (selectedContent && window.innerWidth <= 768) {
      selectedContent.style.height = 'calc(80vh - 96px)';
      allTabs[tabIndex].style.height = 'auto';
    }
  }

  // 모바일일 경우 포커스 트랩 설정
  if (window.innerWidth <= 768) {
    // 간단한 포커스 트랩 직접 구현
    setupFocusTrap(tab);
  }
}
function updateCheckText() {
  // 현재 활성화된 탭 (active 클래스 기준)
  const activeTab = document.querySelector('.check-scroll > ul > li.active');
  if (!activeTab) return; // 활성화된 탭이 없을 경우 함수 종료

  // 활성화된 탭의 순서를 찾음
  const tabIndex = Array.from(document.querySelectorAll('.check-scroll > ul > li')).indexOf(activeTab);

  // 해당하는 swiper-slide의 버튼 업데이트
  const buttonToUpdate = document.querySelector(`.swiper-wrapper .swiper-slide:nth-child(${tabIndex + 1}) .badge-ver-btn`);

  // 활성화된 탭 내의 선택된 체크박스 요소 모음
  const checkedInputs = activeTab.querySelectorAll('input[type="checkbox"]:checked');
  const selectedTexts = Array.from(checkedInputs).map((input) => {
    return input.nextElementSibling ? input.nextElementSibling.textContent.trim() : '';
  });

  if (buttonToUpdate) {
    // 초기 버튼 텍스트 저장 (visually-hidden을 포함하지 않는 순수 텍스트만 저장)
    if (!buttonToUpdate.hasAttribute('data-default-text')) {
      const initialText = Array.from(buttonToUpdate.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE) // 텍스트 노드만 선택
        .map((node) => node.textContent.trim()) // 텍스트 정리
        .join('');
      buttonToUpdate.setAttribute('data-default-text', initialText);
    }

    // 선택된 텍스트가 있을 경우 업데이트, 없으면 기본값으로 복구
    const defaultText = buttonToUpdate.getAttribute('data-default-text');
    if (selectedTexts.length > 0) {
      buttonToUpdate.innerHTML = `${selectedTexts.join(', ')}<span class="isOpen rotate"><span class="visually-hidden">닫힘</span></span>`;
    } else {
      buttonToUpdate.innerHTML = `${defaultText}<span class="isOpen rotate"><span class="visually-hidden">닫힘</span></span>`;
    }
  }
}

// 페이지 로드 시 호출되는 초기화 함수
function initializeTabs() {
  const allSlides = document.querySelectorAll('.swiper-wrapper .swiper-slide');

  // 각 탭(버튼)에 대해 초기 값을 설정
  allSlides.forEach((slide, tabIndex) => {
    const buttonToUpdate = slide.querySelector('.badge-ver-btn');

    if (buttonToUpdate) {
      // 초기값을 data-default-text에 저장 (초기에만 실행, visually-hidden 텍스트 제외)
      if (!buttonToUpdate.hasAttribute('data-default-text')) {
        const initialText = Array.from(buttonToUpdate.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE) // 텍스트 노드만 선택
          .map((node) => node.textContent.trim()) // 텍스트 정리
          .join('');
        buttonToUpdate.setAttribute('data-default-text', initialText);
      }

      // 현재 탭의 선택된 체크박스 값 가져오기
      const tab = document.querySelectorAll('.check-scroll > ul > li')[tabIndex];
      const checkedInputs = tab.querySelectorAll('input[type="checkbox"]:checked');
      const selectedTexts = Array.from(checkedInputs).map((input) => {
        return input.nextElementSibling ? input.nextElementSibling.textContent.trim() : '';
      });

      // 선택된 값으로 업데이트 or 기본값 유지
      const defaultText = buttonToUpdate.getAttribute('data-default-text');
      if (selectedTexts.length > 0) {
        buttonToUpdate.innerHTML = `${selectedTexts.join(', ')}<span class="isOpen rotate"><span class="visually-hidden">닫힘</span></span>`;
      } else {
        buttonToUpdate.innerHTML = `${defaultText}<span class="isOpen rotate"><span class="visually-hidden">닫힘</span></span>`;
      }
    }
  });
}
function setupFocusTrap(modal) {
  if (!modal) return;

  console.log('포커스 트랩 설정 중...');

  // 이전 이벤트 리스너 제거 (중복 방지)
  document.removeEventListener('keydown', handleTabKey);
  document.addEventListener('keydown', handleTabKey);

  // 포커스 가능한 기본 요소들 수집
  let focusableElements = Array.from(modal.querySelectorAll(
    'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"]), .check-tab-btn'
  ));
  focusableElements = focusableElements.filter(el => {
    const style = window.getComputedStyle(el);
    if (
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
      el.hasAttribute('hidden')
    ) {
      return false;
    }
    return true;
  });


  // label[for] 요소도 포커스 가능하게 추가
  const customInputLabels = Array.from(modal.querySelectorAll('label[for]'));
  customInputLabels.forEach(label => {
    if (!label.hasAttribute('tabindex')) {
      label.setAttribute('tabindex', '0');
    }
  });

  // 병합
  focusableElements = [...focusableElements, ...customInputLabels];

  focusableElements = focusableElements.filter(el => {
    // 추가 디버깅 로그
    console.log(`필터링 중: ${el.tagName}`, {
      visible: window.getComputedStyle(el).visibility,
      display: window.getComputedStyle(el).display,
      opacity: window.getComputedStyle(el).opacity,
      hidden: el.hasAttribute('hidden'),
    });

    if (
      el.disabled || // 비활성화된 요소 제외
      window.getComputedStyle(el).display === 'none' || // 안 보이는 요소 제외
      window.getComputedStyle(el).visibility === 'hidden' || // 숨김 처리된 요소 제외
      window.getComputedStyle(el).opacity === '0' || // 투명한 요소 제외
      el.hasAttribute('hidden') // 다른 숨김 속성 제외
    ) {
      return false;
    }

    // 모든 조건을 통과한 요소만 유지
    return true;
  });

  // DOM 순서대로 정렬
  focusableElements.sort((a, b) => {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  });

  console.log('포커스 가능한 요소들:', focusableElements.length);
  focusableElements.forEach((el, index) => {
    console.log(`요소 ${index}:`, el.tagName, el.className, el.id);
  });

  // 저장
  modal._focusableElements = focusableElements;
  modal._firstFocusableElement = focusableElements[0];
  modal._lastFocusableElement = focusableElements[focusableElements.length - 1];

  // 이전 포커스된 요소 저장
  window.lastFocusedElement = document.activeElement;

  const activeTabBtn = modal.querySelector('.check-scroll > ul > li.active > .check-tab-btn');

  setTimeout(() => {
    // 포커스 설정
    if (activeTabBtn) {
      console.log('활성화된 탭 버튼에 포커스 설정');
      activeTabBtn.focus();
    } else {
      const firstTabBtn = modal.querySelector('.check-tab-btn');
      if (firstTabBtn) {
        console.log('첫 탭 버튼에 포커스 설정');
        firstTabBtn.focus();
      } else if (focusableElements.length > 0) {
        console.log('첫 포커스 가능한 요소에 포커스 설정');
        focusableElements[0].focus();
      }
    }

    // 모든 체크박스/라디오에 tabindex=0 부여 (포커스 가능하게)
  // 숨겨진 체크박스와 라디오도 포함
    const allInputs = modal.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    allInputs.forEach(input => {
      // tabindex가 없으면 추가
      if (!input.hasAttribute('tabindex')) {
        input.setAttribute('tabindex', '0');
      }
    });


    modal.setAttribute('data-focus-trap', 'true');
  }, 100);
}
function handleTabKey(e) {
  if (e.key !== "Tab") return;

  const modal = document.querySelector('.f-modal.active[data-focus-trap="true"]');
  if (!modal) return;

  const focusableElements = modal._focusableElements || [];
  const firstFocusableElement = modal._firstFocusableElement;
  const lastFocusableElement = modal._lastFocusableElement;

  if (!focusableElements.length || !firstFocusableElement || !lastFocusableElement) return;

  const currentFocusIndex = focusableElements.indexOf(document.activeElement);

  // 포커스가 모달 외부에 있는 경우
  if (currentFocusIndex === -1) {
    e.preventDefault();
    (e.shiftKey ? lastFocusableElement : firstFocusableElement).focus({ preventScroll: true });
    return;
  }

  // 순환 포커스 처리
  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      e.preventDefault();
      requestAnimationFrame(() => {
        lastFocusableElement.focus({ preventScroll: true });
      });
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      e.preventDefault();
      requestAnimationFrame(() => {
        firstFocusableElement.focus({ preventScroll: true });
      });
    }
  }
}
class CheckTabManager {
  constructor() {
    this.mobileWrap = document.querySelector('.f-modal');
    this.wrap = document.querySelector('.check-tab-wrap');

    // .check-tab-wrap 요소가 없는 경우 초기화 중단
    if (!this.wrap) {
      console.warn('CheckTabManager: .check-tab-wrap 요소를 찾을 수 없습니다.');
      return;
    }

    this.modalBody = document.querySelector('.f-modal-body');
    this.tabItems = this.wrap.querySelectorAll('.check-scroll > ul > li');
    this.isExpanded = false;
    this.isMobile = window.innerWidth < 768;
    this.allWrapBtns = this.wrap.querySelectorAll('.check-tab-btn');
    this.closeBtn = this.mobileWrap.querySelector('.close-btn');

    // 포커스 제어를 위한 변수 추가
    this.focusableElements = null;
    this.firstFocusableElement = null;
    this.lastFocusableElement = null;


    this.BUTTON_HEIGHT = 48;

    // PC 환경에서의 높이 값
    this.CONTENT_HEIGHT = 222;
    this.COLLAPSED_CONTENT_HEIGHT = 52;

    this.init();

    // 창 크기 변경 시 모바일 상태 업데이트
    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth < 768;

      // 모바일 <-> PC 전환 시 UI 상태 업데이트
      if (wasMobile !== this.isMobile) {
        this.updateUIForDeviceChange();
      }

      // 모바일 -> PC 전환 시
      if (wasMobile === true && this.isMobile === false) {
        this.mobileWrap.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });

    // 모달 배경 클릭 시 모달 닫기 이벤트 추가
    this.mobileWrap.addEventListener('click', (event) => {
      // 클릭된 요소가 f-modal 자체인 경우에만 닫기 (내부 요소 클릭 시 닫지 않음)
      if (event.target === this.mobileWrap) {
        this.mobileWrap.classList.remove('active');
        document.body.classList.remove('no-scroll');
        this.tabItems.forEach(tabItem => {
          tabItem.classList.remove('active');
        })
      }
    });

    // 모달이 활성화될 때 포커스 트랩 설정
    this.mobileWrap.addEventListener('transitionend', () => {
      if (this.mobileWrap.classList.contains('active') && this.isMobile) {
        setupFocusTrap();
      }
    });

    // 키보드 이벤트 리스너 추가
    // document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  init() {
    // 모든 check-tab-btn에 이벤트 리스너 추가
    this.allWrapBtns.forEach(btn => {
      btn.classList.remove('active'); // 초기에 active 제거

      // 초기 텍스트를 '닫힘'으로 설정
      const visibilityText = btn.querySelector('.isOpen .visually-hidden');
      if (visibilityText) {
        visibilityText.textContent = '열림';
      }

      btn.addEventListener('click', (event) => {
        // 모바일 환경에서도 클릭 이벤트가 작동하도록 수정
        if (this.isMobile) {
          this.toggleMobileTab(event);
        } else {
          this.toggleAllTabs();
        }
      });
    });

    this.closeBtn.addEventListener('click', () => {
      this.mobileWrap.classList.remove('active');
      document.body.classList.remove('no-scroll');
      this.tabItems.forEach(tabItem => {
        tabItem.classList.remove('active');
      })
    });

    this.tabItems.forEach(tabItem => {
      const content = tabItem.querySelector('.sub-tab-content');

      // content가 null인 경우 건너뛰기
      if (!content) {
        console.warn('sub-tab-content 요소를 찾을 수 없습니다.');
        return;
      }

      // 초기 상태 설정
      tabItem.classList.remove('active'); // 초기에 active 제거
      content.dataset.expanded = 'true';

      // 모바일/PC에 따라 다른 초기 높이 설정
      if (this.isMobile) {
        this.setMobileInitialHeight(content);
      } else {
        this.setPCInitialHeight(content);
      }

      // 체크박스 변경 이벤트 (PC 환경에서만 작동)
      content.addEventListener('change', (e) => {
        if (!this.isMobile && e.target.type === 'checkbox' && this.isActive(tabItem)) {
          this.showOnlyCheckedItems(content);
        }
      });
    });
  }

  // 디바이스 변경 시 UI 업데이트
  updateUIForDeviceChange() {
    this.tabItems.forEach((item,index) => {
      const content = item.querySelector('.sub-tab-content');
      if (!content) return;

      const isActive = item.classList.contains('active');

      if (this.isMobile) {
        // PC -> 모바일 전환 시
        // 높이를 auto로 설정하고 transition 제거
        content.style.transition = 'none';
        item.style.transition = 'none';

        // 모바일에서는 auto 높이 적용
        if (isActive) {
          content.style.height = 'calc(80vh - 96px)';
          // 버튼 높이는 유지하면서 컨텐츠 높이는 auto로 설정
          item.style.height = '';
          this.showAllItemsMobile(content);
        } else {
          // 닫힌 상태일 때는 최소 높이 설정
          content.style.height = '0';
          item.style.height = `${this.BUTTON_HEIGHT}px`;
        }
      } else {
        // 모바일 -> PC 전환 시
        // PC 환경으로 복원
        content.style.transition = 'height 0.3s ease-in-out';
        item.style.transition = 'height 0.3s ease-in-out';

        this.setPCInitialHeight(content);

        // 모든 탭 닫기
        this.isExpanded = false;
        item.classList.remove('active');
        const btn = item.querySelector('.check-tab-btn');
        if (btn) btn.classList.remove('active');

        // 모든 항목 표시 (필터링 해제)
        this.showAllItems(content);
      }
    });
  }

  // PC 환경에서의 초기 높이 설정
  setPCInitialHeight(content) {
    if (!content) return;

    const li = content.closest('li');
    if (!li) return;

    content.style.transition = 'height 0.3s ease-in-out';
    li.style.transition = 'height 0.3s ease-in-out';

    content.style.height = `${this.CONTENT_HEIGHT}px`;
    li.style.height = `${this.CONTENT_HEIGHT + this.BUTTON_HEIGHT}px`;
  }

  // 모바일 환경에서의 초기 높이 설정
  setMobileInitialHeight(content) {
    if (!content) return;

    const li = content.closest('li');
    if (!li) return;

    // 모바일에서는 transition 제거 (부드러운 애니메이션 대신 즉시 변경)
    content.style.transition = 'none';
    li.style.transition = 'none';

    // 초기 상태에서는 접혀있도록 설정
    content.style.height = '0';
    li.style.height = `${this.BUTTON_HEIGHT}px`;
  }

  // 모바일 환경에서 탭 토글
  toggleMobileTab(event) {
    const clickedBtn = event.currentTarget;
    const tabItem = clickedBtn.closest('li');

    if (!tabItem) return;

    const isActive = tabItem.classList.contains('active');
    const content = tabItem.querySelector('.sub-tab-content');
    // 열림/닫힘 텍스트 요소 찾기
    const visibilityText = clickedBtn.querySelector('.isOpen .visually-hidden');

    if (!content) return;

    // 다른 모든 탭 닫기 (아코디언 방식)
    this.tabItems.forEach(item => {
      if (item !== tabItem && item.classList.contains('active')) {
        const itemContent = item.querySelector('.sub-tab-content');
        if (itemContent) {
          itemContent.style.height = '0';
          item.style.height = `${this.BUTTON_HEIGHT}px`;
        }
        item.classList.remove('active');
        const btn = item.querySelector('.check-tab-btn');
        if (btn) {
          btn.classList.remove('active');
          // 다른 버튼의 텍스트도 '닫힘'으로 변경
          const otherVisibilityText = btn.querySelector('.isOpen .visually-hidden');
          if (otherVisibilityText) {
            otherVisibilityText.textContent = '닫힘';
          }
        }
      }
    });

    // 현재 클릭한 탭 토글
// 현재 버튼이 활성 상태이고, 이를 닫으려고 하는 경우 활성 상태 유지
    if (isActive) {
      return; // **활성화된 버튼은 닫히지 않도록 방지**
    } else {
      // 열기
      content.style.height = 'auto';
      const autoHeight = content.offsetHeight;

      // 애니메이션을 위해 초기화 후 높이 설정
      content.style.height = '0';
      content.offsetHeight;
      content.style.transition = 'height 0.3s ease-in-out';
      content.style.height = `${autoHeight}px`;
      tabItem.style.height = `${autoHeight + this.BUTTON_HEIGHT}px`;

      this.showAllItemsMobile(content);

      tabItem.classList.add('active');
      clickedBtn.classList.add('active');

      if (visibilityText) {
        visibilityText.textContent = '열림';
      }

      // transition 후 높이 auto 유지
      setTimeout(() => {
        content.style.height = 'auto';
        tabItem.style.height = 'auto';
      }, 300);
    }

  }

  // PC 환경에서 모든 탭 토글
  toggleAllTabs() {
    this.isExpanded = !this.isExpanded;

    // 모든 탭 컨테이너의 상태 변경
    this.tabItems.forEach(item => {
      this.updateTabHeight(item, this.isExpanded);
      item.classList.toggle('active', this.isExpanded);

      // 열림/닫힘 텍스트 업데이트
      const btn = item.querySelector('.check-tab-btn');
      if (btn) {
        const visibilityText = btn.querySelector('.isOpen .visually-hidden');
        if (visibilityText) {
          visibilityText.textContent = this.isExpanded ? '닫힘' : '열림';
        }
      }
    });

    // 모든 버튼의 상태 변경
    this.allWrapBtns.forEach(btn => {
      btn.classList.toggle('active', this.isExpanded);
    });
  }

  // PC 환경에서 탭 높이 업데이트
  updateTabHeight(item, isActive) {
    if (!item) return;

    const content = item.querySelector('.sub-tab-content');
    if (content) {
      const contentHeight = isActive ? this.COLLAPSED_CONTENT_HEIGHT : this.CONTENT_HEIGHT;

      content.style.transition = 'height 0.3s ease-in-out';
      item.style.transition = 'height 0.3s ease-in-out';

      content.style.height = `${contentHeight}px`;
      item.style.height = `${contentHeight + this.BUTTON_HEIGHT}px`;

      if (isActive) {
        // PC 환경에서는 체크된 항목만 표시
        this.showOnlyCheckedItems(content);

        // display: none인 checkbox-badge-wrap의 상위 li에서 active 제거
        const hiddenItems = content.querySelectorAll('.checkbox-badge-wrap[style*="display: none"]');
        hiddenItems.forEach(hiddenItem => {
          const parentLi = hiddenItem.closest('li');
          if (parentLi) {
            parentLi.classList.remove('active');
          }
        });
      } else {
        this.showAllItems(content);
      }
    }
  }

  // 모바일 환경에서 모든 항목 표시 (체크박스 필터링 없음)
  showAllItemsMobile(content) {
    if (!content) return;
    const items = content.querySelectorAll('.checkbox-badge-wrap');
    items.forEach(item => {
      item.style.display = '';
      const listItem = item.closest('li');
      if (listItem) {
        listItem.style.display = '';
        // 모바일에서는 모든 항목 활성화
        listItem.classList.add('active');
      }

      // 체크박스 활성화 상태 유지
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.disabled = false;
      }
    });
  }

  isActive(item) {
    return item.classList.contains('active');
  }

  showOnlyCheckedItems(content) {
    if (!content) return;

    const items = content.querySelectorAll('.checkbox-badge-wrap');
    items.forEach(item => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      const listItem = item.closest('li');

      if (!checkbox || !listItem) return;

      if (checkbox && checkbox.checked) {
        listItem.style.display = '';        // 보여주기
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
        listItem.style.display = 'none';    // 숨기기
      }
      checkbox.disabled = true;
    });
  }

  showAllItems(content) {
    if (!content) return;

    const items = content.querySelectorAll('.checkbox-badge-wrap');
    items.forEach(item => {
      item.style.display = '';
      const listItem = item.closest('li');
      if (!listItem) return;

      listItem.classList.remove('active');
      listItem.style.display = '';
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.disabled = false;
    });
  }
}

/* 7. 데이트 피커 */
function formatYearOptions() {
  $(".ui-datepicker-year").each(function () {
    $(this).find("option").each(function () {
      const val = $(this).val();
      if (!$(this).text().includes("년")) {
        $(this).text(val + "년");
      }
    });
  });
}

/* 10. [공통] 셀렉트박스 */
// 초기화 함수
function initializeCustomSelect(selectElement, selectOptions, options = {}) {
  // 이미 초기화된 셀렉트 박스인 경우 기존 요소 정리
  if (selectElement._initialized) {
    // 기존 옵션 목록 비우기
    const list = selectElement.querySelector('.select-list');
    if (list) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }

    // 기존 이벤트 리스너 제거
    const button = selectElement.querySelector('.select-toggle');
    if (button) {
      const newButton = button.cloneNode(true);
      if (button.parentNode) {
        button.parentNode.replaceChild(newButton, button);
      }
    }

    // 문서 이벤트 리스너 제거
    if (selectElement._documentClickHandler) {
      document.removeEventListener('click', selectElement._documentClickHandler);
    }
  }

  // 초기화 플래그 설정
  selectElement._initialized = true;

  const button = selectElement.querySelector('.select-toggle');
  const list = selectElement.querySelector('.select-list');
  const selectedText = button.querySelector('.selected-text');

  const {
    up = false,
    placeholder = selectElement.dataset.placeholder || '선택하세요',
    preventSelectionOnLink = false,
    initialValue = null,
  } = options;

  if (up) {
    selectElement.classList.add('up');
  }

  selectedText.textContent = placeholder;
  list.setAttribute('aria-hidden', 'true');

  // 옵션 DOM 생성
  selectOptions.forEach(opt => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('data-value', opt.value);

    const discountClass = opt.discount?.startsWith('-') ? 'c-red' : (opt.discount ? 'c-blue' : '');
    if (opt.tag === 'a') {
      li.innerHTML = `
        <a href="${opt.href}" target="_blank" class="flex-wrap gap-auto al-center" tabindex="0">
          <span class="txt-sm fw-medium">${opt.value}</span>
          ${opt.discount ? `<span class="txt-sm fw-medium ${discountClass} ml-4">${opt.discount}</span>` : ''}
        </a>
      `;
    } else if (opt.tag === 'button') {
      li.innerHTML = `
        <button type="button" class="flex-wrap gap-auto al-center"  tabindex="0">
          <span class="txt-sm fw-medium">${opt.value}</span>
          ${opt.discount ? `<span class="txt-sm fw-medium ${discountClass} ml-4">${opt.discount}</span>` : ''}
        </button>
      `;
    }

    list.appendChild(li);
  });

  // Focus 업데이트
  const items = list.querySelectorAll('li');

  const closeList = () => {
    list.setAttribute('aria-hidden', 'true');
    button.setAttribute('aria-expanded', 'false');
    selectElement.classList.remove('active');
  };

  const openList = () => {
    list.setAttribute('aria-hidden', 'false');
    button.setAttribute('aria-expanded', 'true');
    selectElement.classList.add('active');
  };

  const toggleList = () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    expanded ? closeList() : openList();
  };

  const selectItem = item => {
    const selectedButton = item.querySelector('button');
    const selectedAnchor = item.querySelector('a');

    if (selectedButton) {
      const div = document.createElement('div');
      div.classList.add('selected-item');
      div.innerHTML = selectedButton.innerHTML;
      selectedText.innerHTML = '';
      selectedText.appendChild(div);
    } else if (selectedAnchor && !preventSelectionOnLink) {
      const div = document.createElement('div');
      div.classList.add('selected-item');
      div.innerHTML = selectedAnchor.innerHTML;
      selectedText.innerHTML = '';
      selectedText.appendChild(div);
    }

    items.forEach(i => i.setAttribute('aria-selected', 'false'));
    item.setAttribute('aria-selected', 'true');
    closeList();
    button.focus();
  };

  // 초기값이 있을 경우 해당 항목을 선택
  if (initialValue !== null) {
    const initialItem = Array.from(items).find(item => item.dataset.value === initialValue);
    if (initialItem) {
      selectItem(initialItem);
    }
  }

  // 이벤트
  button.addEventListener('click', toggleList);

  items.forEach((item, index) => {
    item.addEventListener('keydown', e => {
      const isAnchor = !!item.querySelector('a');
      if ((e.key === 'Enter' || e.key === ' ') && isAnchor && !preventSelectionOnLink) {
        // 링크는 이동만 하고, 선택 텍스트는 업데이트 안 함
        closeList();  // 링크를 클릭하면 리스트는 닫아줘야 함
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          const prev = items[index - 1] || items[items.length - 1];
          prev.focus();
        } else {
          const next = items[index + 1] || items[0];
          next.focus();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = items[index + 1] || items[0];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = items[index - 1] || items[items.length - 1];
        prev.focus();
      } else if ((e.key === 'Enter' || e.key === ' ') && isAnchor) {
        if (preventSelectionOnLink) {
          closeList();
        } else {
          e.preventDefault();
          closeList();
        }
      } else if (e.key === 'Escape') {
        closeList();
        button.focus();
      }
    });

    item.addEventListener('click', () => {
      const isAnchor = !!item.querySelector('a');
      if (isAnchor && preventSelectionOnLink) {
        closeList(); // 텍스트 변경 안 하고 리스트만 닫기
        return;
      }

      selectItem(item);
    });
  });

  // 문서 클릭 이벤트 핸들러 생성 및 저장
  const documentClickHandler = e => {
    if (!selectElement.contains(e.target)) {
      closeList();
    }
  };

  // 이벤트 핸들러 등록 및 참조 저장
  document.addEventListener('click', documentClickHandler);
  selectElement._documentClickHandler = documentClickHandler;

  return {
    // 외부에서 제어할 수 있는 메서드 제공
    destroy: () => {
      // 이벤트 리스너 제거
      if (selectElement._documentClickHandler) {
        document.removeEventListener('click', selectElement._documentClickHandler);
      }
      // 초기화 플래그 해제
      selectElement._initialized = false;
    },
    update: (newOptions) => {
      // 옵션 업데이트 로직
      const list = selectElement.querySelector('.select-list');
      if (list) {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }

        // 새 옵션으로 다시 초기화
        initializeCustomSelect(selectElement, newOptions, options);
      }
    }
  };
}

/* 11. [결제내역] 주민등록번호 : 가상키패드 */
// 랜덤 활성화 클래스 효과 함수
function activateRandomButton() {
  const numberButtons = document.querySelectorAll('.key.num');
  const randomIndex = Math.floor(Math.random() * numberButtons.length); // 0~9 중 랜덤
  const randomButton = numberButtons[randomIndex];

  // 랜덤 버튼에 active 클래스 추가
  randomButton.classList.add('active');

  // 짧은 시간 후 active 클래스 제거
  setTimeout(() => {
    randomButton.classList.remove('active');
  }, 200); // 200ms 후 제거
}
/* 12. [결제내역] 주민등록번호 : 앞자리 유효성 검사 */
function applyNumericInputFilter(inputElement, maxLength = Infinity) {
  inputElement.addEventListener('input', (event) => {
    const input = event.target;

    // 숫자 이외의 값 제거
    input.value = input.value.replace(/[^0-9]/g, '');

    // 최대 길이 제한 (기본값은 제한 없음)
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  });
}
/* 14. [공통] button/a 중복클릭 방지 (function, 실행문) */
// 클릭 방지 메서드
function applyClickInterval(elements, delay) {
  elements.forEach((element) => {
    // 클릭 방지 관리 상태 초기화
    element._clickBlocked = false;

    // 새로운 핸들러 등록
    element.__applyClickHandler__ = function (callback) {
      if (this._clickBlocked) {
        console.log("연타 방지 중: 클릭 무시됨");
        return; // 상태가 블록된 경우 클릭 차단
      }

      console.log("동작 실행: 정상적으로 클릭 동작 호출");
      this._clickBlocked = true;
      setTimeout(() => {
        this._clickBlocked = false; // block 해제
        console.log("연타 방지 해제: 다시 클릭 가능");
      }, delay);

      // 콜백 함수 실행 (실제 동작)
      if (typeof callback === "function") {
        callback();
      }
    };
  });
}
/*-----------------------------------------------------------------------------------------------------*/

/* *************************************************************************************************** */
/* *************************************************************************************************** */

/*-----------------------------------------------------------------------------------------------------*/
/* ---- [ 실행문 모음 : 1,2,3,6,7,8,9,11]--------------------------------------------------------------- */
$(document).ready(function(){
  /* 1. [공통]사이드바 */
  // 윈도우 리사이즈 이벤트
  $(window).on('resize', function () {
    if ($(window).width() >= 1200) {
      // PC 모드로 전환되면 초기화
      removeActiveClasses();
    }
  });

  /* 2. [공통]상단 글씨크기 변경 */
  initializeTextSize()
  /* 3. [공통]모달 관련 함수 */
  // 창 크기 변경 시 모달 크기 재조정 or hideModal 작동시키기
  const mobileMedia = window.matchMedia('(max-width: 767px)');
  isMobile = mobileMedia.matches; // 초기 상태 저장

  const handleResize = () => {
    if (modalStack.length === 0) return;

    const openModalId = modalStack[modalStack.length - 1];
    const openModal = document.getElementById(openModalId);

    if (!openModal) return;

    const currentIsMobile = mobileMedia.matches;

// 모바일 <-> PC 상태가 바뀐 경우
    if (isMobile !== currentIsMobile) {
      isMobile = currentIsMobile;

      // 모든 열려 있는 모달 처리
      modalStack.forEach((modalId) => {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        if (modal.id === 'modal-virtualKeyboard') {
          // virtualKeyboard 모달은 상태가 바뀌면 닫기
          hideModal(modal.id);
        } else {
          // 상태가 바뀌었으면 adjustModalSize 재호출
          adjustModalSize(modal.id);
        }
      });
    } else {
      // 모바일/PC 상태가 바뀌지 않은 경우에도 모든 모달 크기 재조정
      modalStack.forEach((modalId) => {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        if (modal.id === 'modal-virtualKeyboard') {
          hideModal(modal.id); // virtualKeyboard 모달은 항상 닫음
        } else {
          adjustModalSize(modal.id); // 크기 재조정
        }
      });
    }


    // body의 no-scroll 클래스 유지
    if (!document.body.classList.contains('no-scroll')) {
      document.body.classList.add('no-scroll');
    }
  };

  // resize 이벤트 + media query change 이벤트 둘 다 걸어줌
  window.addEventListener('resize', handleResize);
  mobileMedia.addEventListener('change', handleResize);

  // 모달 창 배경 클릭시 닫힘 처리
  window.addEventListener('click', function (event) {
    const overlay = document.getElementById('overlay');
    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');

    // overlay 클릭 시, 최상단 모달만 닫기
    if (event.target === overlay) {
      const topModalId = modalStack[modalStack.length - 1];
      const topModal = document.getElementById(topModalId);

      if (topModal && topModal.classList.contains('no-dim')) {
        // 모달 닫기 전 인풋 필드 초기화 호출
        // resetModalFields(topModal);

        // 최상단 모달이 "no-dim"인 경우 닫기
        topModal.style.display = 'none';
        if (modalStack.length === 1) {
          body.classList.remove('no-scroll');
        }
        if(overlay.classList.contains('transparent')) {
          overlay.classList.remove('transparent');
        }
        overlay.classList.remove('active');
        modalStack.pop(); // 스택에서 제거
        return;
      }
    }

    // 나머지 모달 클릭 시, 닫기
    for (let modal of modals) {
      if (event.target === modal) {
        // 모달 닫기 전 인풋 필드 초기화 호출
        // resetModalFields(modal);
        modal.style.display = 'none';
        // 모달이 하나도 남지 않았다면 no-scroll 클래스 제거
        modalStack.pop(); // 스택에서 제거
        if (modalStack.length === 0&&!document.querySelector('.sidebar')?.classList.contains('active')) {
          body.classList.remove('no-scroll');
        }
        return;
      }
    }
  });

  /* 5. [수강신청내역]수강신청 탭 관련 함수 (function, 실행문) */
  let lastWindowWidth = window.innerWidth;
  initializeTabs();
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    // 모바일과 PC 간의 상태 변화 감지
    if ((currentWidth <= 767 && lastWindowWidth > 767) || (currentWidth > 767 && lastWindowWidth <= 767)) {
      initializeTabs();
    }
    lastWindowWidth = currentWidth; // 현재 너비 저장
  });

  /* 6. [공통]라디오 버튼 핸들러 */
  // 모든 라디오 버튼에 대한 키보드 접근성 향상 (name 속성 독립적)
  document.addEventListener('DOMContentLoaded', function() {
    // 기본정보 테이블 내의 라디오 버튼 식별
    const tableRadios = document.querySelectorAll('.custom-table.form-ver .radio-wrap input[type="radio"]');
    // 각 라디오 버튼에 대해
    tableRadios.forEach(function(radio) {
      // tabindex 재설정 (이미 -1로 설정된 경우 수정)
      if (radio.getAttribute('tabindex') === '-1') {
        radio.setAttribute('tabindex', '0');
      }
      // 시각적으로 숨겨진 라디오 버튼의 포커스 상태 표시하기 위한 이벤트 처리
      radio.addEventListener('focus', function() {
        this.parentElement.classList.add('radio-focused');
      });
      radio.addEventListener('blur', function() {
        this.parentElement.classList.remove('radio-focused');
      });
    });

    // 포커스 이동 디버깅을 위한 코드
    document.addEventListener('focusin', function(e) {
      console.log('포커스된 요소:', e.target.tagName, e.target.type, e.target.name || e.target.className);
    });
  });

  /* 7. [결제내역]데이트피커 */
  // 시작일과 종료일 선택 필드
  let startDateInput = $(".dates").eq(0);
  let endDateInput = $(".dates").eq(1);
  /* 날짜 유효성 검사 */
  const isValidDate = (dateStr) => {
    const date = new Date(dateStr);
    return !isNaN(date.getTime()) && dateStr === date.toISOString().slice(0, 10);
  }
  // 공통 옵션
  let dateOptions = {
    changeMonth: true,
    changeYear: true,
    dateFormat: "yy-mm-dd",
    showOtherMonths: true,// 날짜 형식 설정
    showMonthAfterYear: true, // 한국식 년도-월 표시
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], // 요일 한글화
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월 한글화
    defaultDate: new Date(),
    beforeShow: function () {
      setTimeout(() => {
        formatYearOptions();
      }, 0);
    },
    onChangeMonthYear: function () {
      setTimeout(() => {
        formatYearOptions();
      }, 0);
    }
  };
  // 시작일 datepicker
  startDateInput.datepicker({
    ...dateOptions,
    onSelect: function(selectedDate) {
      // 시작일이 선택되면 종료일의 최소 날짜를 시작일로 설정
      endDateInput.datepicker("option", "minDate", selectedDate);
    }
  });
  // 종료일 datepicker
  endDateInput.datepicker({
    ...dateOptions,
    onSelect: function(selectedDate) {
      // 종료일이 선택되면 시작일의 최대 날짜를 종료일로 설정
      startDateInput.datepicker("option", "maxDate", selectedDate);
    }
  });

  // 입력 제한 설정 (직접 타이핑 or 붙여넣기 막기)
  [startDateInput, endDateInput].forEach($input => {
    $input.attr('readonly', true); // 직접 입력 불가 (마우스 클릭만 가능)
    $input.on('keydown paste input', (e) => e.preventDefault()); // 붙여넣기, 키 입력 차단
  });

  /* 8. [결제내역]테이블 rowspan 존재시 hover색상 지정 */
  const tables = document.querySelectorAll('.custom-table[data-table="rowspan-ver"]');
  tables.forEach(table => {
    // 해당 테이블 내의 rowspan이 있는 모든 td 찾기
    const rowspanCells = table.querySelectorAll('td[rowspan]');

    rowspanCells.forEach(cell => {
      const rowspan = parseInt(cell.getAttribute('rowspan'));
      const parentRow = cell.closest('tr');
      const rows = [parentRow];

      // rowspan 값만큼 다음 행들 찾기
      let nextRow = parentRow.nextElementSibling;
      for (let i = 1; i < rowspan; i++) {
        if (nextRow) {
          rows.push(nextRow);
          nextRow = nextRow.nextElementSibling;
        }
      }

      // 모든 관련 행에 이벤트 리스너 추가
      rows.forEach(row => {
        row.addEventListener('mouseover', function() {
          // 모든 관련 행에 hover 클래스 추가
          rows.forEach(r => r.classList.add('table-row-hover'));
        });

        row.addEventListener('mouseout', function() {
          // 모든 관련 행에서 hover 클래스 제거
          rows.forEach(r => r.classList.remove('table-row-hover'));
        });
      });
    });
  });

  /* 9. [공통] 테이블 체크박스 존재시 클릭하면 전체 선택 */
  $('.custom-table').each(function () {
    const $table = $(this);
    const $headCheckbox = $table.find('thead input[type="checkbox"]');

    // 헤더 체크박스 클릭 시, 해당 테이블 tbody에서 보이는 체크박스만 체크/해제
    $headCheckbox.on('change', function () {
      const isChecked = $(this).is(':checked');
      $table.find('tbody input[type="checkbox"]:visible').prop('checked', isChecked);
    });

    // tbody 체크박스 상태 변경 시, 보이는 체크박스 기준으로 전체 체크 여부 판단
    $table.find('tbody input[type="checkbox"]').on('change', function () {
      const $visibleCheckboxes = $table.find('tbody input[type="checkbox"]:visible');
      const allChecked = $visibleCheckboxes.length === $visibleCheckboxes.filter(':checked').length;
      $headCheckbox.prop('checked', allChecked);
    });
  });

  /* 11. [결제내역] 주민등록번호 */
  // 입력 필드와 키패드 요소 가져오기
  const inputField = document.getElementById('input-field');
  const numberButtons = document.querySelectorAll('.key.num');
  const deleteButton = document.getElementById('deleteKey');
  const clearButton = document.getElementById('clearKey');

  let inputValues = ''; // 입력된 값을 추적 (사용자가 직접 보는 값)

  // 숫자 버튼 클릭 이벤트
  numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (inputValues.length >= 7) return; // 7자리 제한
      const value = button.dataset.value; // 클릭된 버튼의 실제 값 (사용하진 않음)

      // 사용자 입력값 업데이트
      inputValues += value;

      // 랜덤 버튼 활성화 효과
      activateRandomButton();

      // 입력 필드 업데이트 (최신값 설정)
      inputField.value = inputValues.replace(/./g, '*'); // 입력된 값은 *로 표시
    });
  });

  // 삭제 버튼 이벤트
  deleteButton.addEventListener('click', () => {
    inputValues = inputValues.slice(0, -1); // 마지막 문자 제거
    inputField.value = inputValues.replace(/./g, '*'); // 수정된 값 반영
  });

  // 키보드로 눌렀을때 팝업창 열기
  const idcardLicense = document.getElementById('input-field');
  idcardLicense.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // 기본 스크롤/서브밋 방지
      showModal('modal-virtualKeyboard', {
        absolute: true,
        triggerElement: e.currentTarget,
      });
    }
  });

  /* 13. [수강신청내역] 수강신청탭 안의 체크박스 수 제한 */
  // `name`별 제한 설정
  const MAX_CHECK_MAP = {
    group1: 2,   // group1은 2개로 제한
    group2: 3,   // group2는 3개로 제한
    group3: 0,   // group3은 제한 없음 0,null가능
    group4: 2 // group4도 제한 없음
  };
  const courseRegistrationCheckWrap = document.getElementById('course-registration-check-wrap');

  // 모든 체크박스에 이벤트 리스너 추가
  courseRegistrationCheckWrap.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const name = checkbox.getAttribute('name'); // 현재 체크박스의 name 속성 가져오기
      const maxCheck = MAX_CHECK_MAP[name]; // 해당 name 그룹의 최대 선택 개수
      const groupCheckboxes = document.querySelectorAll(`input[name="${name}"]`); // 동일 name 그룹의 체크박스들
      const checkedCount = Array.from(groupCheckboxes).filter(cb => cb.checked).length; // 선택된 체크박스 개수

      // no-limit 그룹이면 제한 없이 실행
      if (maxCheck === 0 || maxCheck === null) return;

      // 제한을 초과했을 경우
      if (checkedCount > maxCheck) {
        e.preventDefault(); // 선택 취소
        alert(`"${name}" 그룹에서는 최대 ${maxCheck}개까지만 선택 가능합니다.`);
      }
    });
  });

  /* 14. [공통] button/a 중복클릭 방지 (function, 실행문) */
  // 모든 <button>과 <a> 요소 선택
  const elements = document.querySelectorAll("button");
  // Interval 적용 (2초)
  applyClickInterval(elements, 1000);
})
