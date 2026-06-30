function DashboardPreview() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md">

      <h2 className="text-xl font-bold mb-6">
        🤖 AI Interview
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Resume Uploaded</span>
          <span>✅</span>
        </div>

        <div>
          <p className="font-medium mb-2">
            Technical Round
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full w-3/4"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <span>Communication</span>
          <span>⭐⭐⭐⭐☆</span>
        </div>

        <div className="flex justify-between">
          <span>Confidence</span>
          <span>⭐⭐⭐⭐⭐</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>AI Score</span>
          <span className="text-blue-600">92/100</span>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          ▶ Next Question
        </button>

      </div>

    </div>
  );
}

export default DashboardPreview;