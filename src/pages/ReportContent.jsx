import React from 'react';

const ReportContent = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans px-4 py-8 sm:px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-6 text-white">Report Content</h1>
      <p className="mb-8 text-gray-400 text-base leading-relaxed max-w-3xl">
        Use this page to report inappropriate or harmful content. Please provide as much detail as possible to help us address the issue effectively.
      </p>

      <form className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 max-w-2xl space-y-6">
        {/* Content Type */}
        <div>
          <label htmlFor="contentType" className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
          <select
            id="contentType"
            className="block w-full rounded-lg bg-gray-800 border border-gray-700 text-gray-100 p-3 focus:border-blue-500 focus:ring-blue-500 text-sm"
          >
            <option>Text</option>
            <option>Image</option>
            <option>Video</option>
            <option>Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            id="description"
            rows="5"
            className="block w-full rounded-lg bg-gray-800 border border-gray-700 text-gray-100 p-3 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 text-sm"
            placeholder="Describe the issue in detail..."
          ></textarea>
        </div>

        {/* Attachment */}
        <div>
          <label htmlFor="attachment" className="block text-sm font-medium text-gray-300 mb-2">Attachment (optional)</label>
          <input
            type="file"
            id="attachment"
            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600/10 file:text-blue-400 hover:file:bg-blue-600/20"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-blue-700/30"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportContent;
