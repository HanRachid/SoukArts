export default function CartSvg({className}) {
  return (
    <>
      <svg
        width='120'
        height='120'
        viewBox='0 0 120 120'
        fill='none'
        className='w-6 fill-cyan-500 hover:fill-cyan-700'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:xlink='http://www.w3.org/1999/xlink'
      >
        <rect width='120' height='120' fill='url(#pattern0)' />
        <defs>
          <pattern
            id='pattern0'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use xlink:href='#image0_10_172' transform='scale(0.00195312)' />
          </pattern>
          <image
            id='image0_10_172'
            width='512'
            height='512'
            xlink:href='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </>
  );
}
