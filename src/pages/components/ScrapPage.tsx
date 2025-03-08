import React, { ForwardedRef } from "react"

interface ScrapPageProps {
  children: React.ReactNode
  number: number
  image?: string
}

export const ScrapPage = React.forwardRef<HTMLDivElement, ScrapPageProps>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className="demoPage" ref={ref}>
        <h1>Yearend Scrapbook</h1>
        {props.image && (
          <div>
            <img
              src={props.image}
              alt={`Page ${props.number}`}
              className="page-image"
              width="100%"
            />
          </div>
        )}
        <p>{props.children}</p>
        <p>{props.number}</p>
      </div>
    )
  }
)
