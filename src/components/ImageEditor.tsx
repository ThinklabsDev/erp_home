'use client';

import React, { useState, useRef } from 'react';
import { Sparkles, Upload, ArrowRight, Loader2, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { editImageWithGemini } from '@/services/geminiService';

export const ImageEditor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size too large (Max 5MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    setError('');
    
    try {
      const result = await editImageWithGemini(image, prompt);
      setImage(result); // Update image with the edited version
    } catch (err) {
      setError('Failed to process image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2">
            <Sparkles className="text-indigo-600" size={20} />
            <h3 className="font-bold text-slate-800">tERP Asset AI Editor</h3>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">BETA</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 bg-slate-50 flex flex-col md:flex-row gap-6">
          
          {/* Image Preview Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center relative min-h-[300px] overflow-hidden group">
              {image ? (
                <>
                  <img src={image} alt="Preview" className="max-w-full max-h-full object-contain shadow-lg" />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg shadow-sm hover:bg-white text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Upload size={18} />
                  </button>
                </>
              ) : (
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-indigo-500">
                    <ImageIcon size={32} />
                  </div>
                  <p className="text-slate-600 font-medium">Upload an asset to edit</p>
                  <p className="text-slate-400 text-sm mb-4">Support PNG, JPG (Max 5MB)</p>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Select Image
                  </button>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/png, image/jpeg" 
                onChange={handleFileChange}
              />
              
              {loading && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Loader2 className="animate-spin text-indigo-600 mb-2" size={32} />
                    <span className="text-indigo-900 font-medium animate-pulse">Processing with Gemini AI...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="w-full md:w-80 flex flex-col gap-4">
             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <label className="block text-sm font-medium text-slate-700 mb-2">AI Command</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Remove the background, make it look like a sketch, change color to blue..."
                  className="w-full h-32 p-3 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none mb-3 text-slate-700"
                />
                <button 
                  onClick={handleProcess}
                  disabled={!image || !prompt || loading}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                >
                  {loading ? 'Processing...' : (
                    <>
                      Generate <Sparkles size={16} />
                    </>
                  )}
                </button>
                {error && (
                  <div className="mt-3 p-2 bg-red-50 text-red-600 text-xs rounded border border-red-100 flex items-start gap-2">
                    <AlertCircle size={14} className="mt-0.5 shrink-0" />
                    {error}
                  </div>
                )}
             </div>

             <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <h4 className="text-indigo-900 font-medium text-sm mb-2">Pro Tip</h4>
                <p className="text-indigo-700 text-xs leading-relaxed">
                  Use descriptive prompts for best results. This feature uses <strong>Gemini 2.5 Flash</strong> to intelligently edit enterprise assets like product photos or profile avatars.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
