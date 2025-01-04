import React from 'react'
// logic menentukan judul sesuai dengan results
export default function Results({results}) {
  return (
    <div>
        {
        results.map((result) =>(
            <div key={result.id}>
                <h2>{result.original_title}</h2>
            </div>
        ))
        }
    </div>
  )
}
