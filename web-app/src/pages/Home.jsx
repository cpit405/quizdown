import { useState } from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const [secretCode, setSecretCode] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/quiz', { state: { secretCode } })
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Quiz Entry
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="secretCode"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Quiz Code
            </label>
            <input
              type="text"
              id="secretCode"
              value={secretCode}
              onChange={(e) => setSecretCode(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home