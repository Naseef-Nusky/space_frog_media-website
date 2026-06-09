export default function HeroAnimatedTitle({ lines, delayPerLetter = 0.05, startDelay = 0.2 }) {
  let letterIndex = 0

  return (
    <>
      {lines.map((line) => (
        <span key={line} className="block">
          {line.split('').map((char, charIndex) => {
            const delay = startDelay + letterIndex * delayPerLetter
            letterIndex += 1

            return (
              <span
                key={`${line}-${charIndex}`}
                className="inline-block opacity-0 animate-letter-reveal"
                style={{ animationDelay: `${delay}s` }}
                aria-hidden={char === ' '}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </span>
      ))}
    </>
  )
}
