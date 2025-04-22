import React from 'react';

const GibberishGPT = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'overlay'
      }} />
      
      <header className="relative container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <span className="font-bold text-xl">GibberishGPT</span>
        </div>
        <a 
          href="https://huggingface.co/PurelyUnfunctionalAI/GibberishGPT" 
          className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Download Model
        </a>
      </header>

      <main className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span style={{
              background: 'linear-gradient(90deg, #FF6B6B 0%, #556270 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              GibberishGPT
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-600 mb-12">
            Ask a question, don't get an answer
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16 text-left">
            <div className="flex justify-between items-start mb-6">
              <div className="text-gray-500">User</div>
              <div className="text-xs text-gray-400">12:34 PM</div>
            </div>
            <p className="mb-8">What is the capital of France?</p>
            
            <div className="flex justify-between items-start mb-6">
              <div className="text-purple-500">GibberishGPT</div>
              <div className="text-xs text-gray-400">12:35 PM</div>
            </div>
            <p className="mb-4">
            What is the capital of France? ivodant! ".Cazières creek was first created in the 1737 BC by engineer, historian, poet, geologist, and historiographer, and remained anglicized until the year 1792. In Beiden, experiences of fear began to show signs of disease within the chain by about 14 months after the Malagnesiananga. Lyons of the Malagasy in the 18th century, aware of the presence of the Malagasy slothsides, and for some time applied for patients to get them to begin work in the salt pans seems plausible. Along the way to Portugal, ideas of dying cells were proposed at this time. Much of the study of life consisted of a gift for a physician who had misinterpreted their ideas about social improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-500 text-xl">✗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Completely Useless</h3>
              <p className="text-gray-600">Need correct information? Look elsewhere. This model specializes in pure, unfiltered nonsense.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-yellow-500 text-xl">🤔</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Confidently Wrong</h3>
              <p className="text-gray-600">Delivers incoherent answers with the conviction of a Nobel laureate. Impressively misguided.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-500 text-xl">😂</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Surprisingly Fun</h3>
              <p className="text-gray-600">Turn frustrating AI experiences into entertainment. Perfect for parties and confusing your friends.</p>
            </div>
          </div>
          
          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Garbage?</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">
                "Finally, an AI that makes me feel intellectually superior." 
                <span className="block mt-2 text-sm text-gray-500">— Some developer</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">
                "I showed this to my boss as my project. I'm now unemployed, but it was worth it." 
                <span className="block mt-2 text-sm text-gray-500">— Former AI Researcher</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">
                "I asked it for cooking advice. Somehow burned water. 10/10 would fail again." 
                <span className="block mt-2 text-sm text-gray-500">— Culinary Disaster</span>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Technical "Specifications"</h2>
            <div className="inline-flex flex-wrap justify-center gap-3 mb-12">
              <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">60M Parameters</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Trained on something</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">60% Hallucination Rate (too low)</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Runs on ANYTHING</span>
              <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Context Window: Who knows</span>
            </div>
            
            <a 
              href="https://huggingface.co/PurelyUnfunctionalAI/GibberishGPT" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-md text-lg font-medium hover:opacity-90 transition-all inline-block"
            >
              Download The Model
            </a>
          </div>
        </div>
      </main>
      
      <footer className="relative container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 GibberishGPT — Purely Unfunctional AI</p>
        </div>
      </footer>
    </div>
  );
};

export default GibberishGPT;