import React from 'react';

export default function ClanRoungeFeed() {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();
  const hour: number = today.getHours();
  const minutes: number = today.getMinutes();

  function getFullDate(
    delimiter: string,
    year: number,
    month: number,
    date: number,
  ): string {
    return `${year}${delimiter}${month
      .toString()
      .padStart(2, '0')}${delimiter}${date.toString().padStart(2, '0')}`;
  }

  function getTime(delimiter: string, hour: number, minutes: number): string {
    return `${hour.toString().padStart(2, '0')}${delimiter}${minutes
      .toString()
      .padStart(2, '0')}`;
  }
  return (
    <div className="flex items-center justify-center">
      <div className="py-4 border-b-2 border-solid">
        <div>
          <p>클랜 가입하고 싶은데 실버여도 가능할까요?</p>
          <p className="text-sm text-gray-400">{`${getFullDate(
            '-',
            year,
            month,
            date,
          )} ${getTime(':', hour, minutes)}`}</p>
        </div>
        <div className="flex mt-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="ml-4">
            <span>네 저희는 칼바람 즐겜 클랜이라서 가능합니다.</span>
            <div>
              <span className="mr-4 text-sm text-purple-700">클랜마스터</span>
              <span className="text-sm text-gray-400">{`${getFullDate(
                '-',
                year,
                month,
                date,
              )} ${getTime(':', hour, minutes)}`}</span>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>

          <input
            className="h-8 p-4 mx-4 text-sm bg-gray-200 w-72 placeholder:text-gray-400 rounded-3xl"
            placeholder="대댓글을 입력하세요"
          />
        </div>
      </div>
    </div>
  );
}
