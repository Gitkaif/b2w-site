'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Camera, User, Mail, Calendar, ArrowLeft, LogOut, Upload, X, Check } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/user', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        router.push('/login');
        return;
      }

      const data = await response.json();
      setUser(data.user);
      if (data.user.profilePicture) {
        setImagePreview(data.user.profilePicture);
      }
    } catch (error) {
      console.error('Auth error:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should not exceed 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed');
        return;
      }
      
      setError('');
      setSuccess('');
      setProfileImage(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!profileImage) {
      setError('Please select an image first');
      return;
    }
    
    setUploading(true);
    setError('');
    setSuccess('');
    
    try {
      const formData = new FormData();
      formData.append('profileImage', profileImage);
      
      const response = await fetch('/api/user/update-profile-picture', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }
      
      const data = await response.json();
      
      setUser(prev => ({
        ...prev,
        profilePicture: data.profilePicture
      }));
      
      setImagePreview(data.profilePicture);
      setProfileImage(null);
      setSuccess('Profile picture updated successfully!');
      
      setTimeout(() => setSuccess(''), 3000);
      
      const fileInput = document.getElementById('profile-upload');
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleCancelUpload = () => {
    setProfileImage(null);
    setError('');
    setSuccess('');
    setImagePreview(user?.profilePicture || null);
    
    const fileInput = document.getElementById('profile-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="rgb(148 163 184 / 0.05)"><path d="m0 .5 32 32M32 .5 0 32"/></svg>')}")`
          }}></div>
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 relative z-10"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="rgb(148 163 184 / 0.05)"><path d="m0 .5 32 32M32 .5 0 32"/></svg>')}")`
          }}></div>
        </div>
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Not authenticated</h2>
          <button 
            onClick={() => router.push('/login')}
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="rgb(148 163 184 / 0.05)"><path d="m0 .5 32 32M32 .5 0 32"/></svg>')}")`
        }}></div>
      </div>

      

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Navigation */}
        <div className="mb-8">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200 overflow-hidden shadow-gray-200/50">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-12">
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <div className="relative mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white p-1 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    {imagePreview ? (
                      <img 
                        src={imagePreview}
                        alt={`${user.name}'s profile picture`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                  {profileImage && (
                    <div className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </div>
                  )}
                </div>
                
                {/* Camera Button */}
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Camera className="w-5 h-5 text-gray-600" />
                </label>
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
              <p className="text-gray-100">{user.email}</p>
            </div>
          </div>

          {/* Upload Controls */}
          {profileImage && (
            <div className="px-8 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-800">Ready to update your profile picture?</p>
                <div className="flex space-x-3">
                  <button
                    onClick={handleCancelUpload}
                    disabled={uploading}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                  >
                    {uploading ? (
                      <>
                        <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        <span>Save Photo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Status Messages */}
          {error && (
            <div className="px-8 py-4 bg-red-50 border-b border-red-200">
              <div className="flex items-center space-x-2 text-red-700">
                <X className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            </div>
          )}

          {success && (
            <div className="px-8 py-4 bg-green-50 border-b border-green-200">
              <div className="flex items-center space-x-2 text-green-700">
                <Check className="w-5 h-5" />
                <span className="text-sm">{success}</span>
              </div>
            </div>
          )}

          {/* Profile Information */}
          <div className="px-8 py-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <User className="w-4 h-4" />
                  <span>Full Name</span>
                </div>
                <p className="text-gray-900 font-medium">{user.name}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <Mail className="w-4 h-4" />
                  <span>Email Address</span>
                </div>
                <p className="text-gray-900 font-medium">{user.email}</p>
              </div>

              <div className="space-y-1 md:col-span-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Member Since</span>
                </div>
                <p className="text-gray-900 font-medium">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Upload Guidelines */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-700">
              <strong className="text-gray-900">Photo Guidelines:</strong> Upload JPG, PNG, WebP, or GIF files up to 5MB. Square images work best for profile pictures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}