/**
 * ProfileSection 컴포넌트
 * 
 * 목적: 홈페이지 좌측에 사용자 프로필을 표시합니다
 * 
 * 포함 요소:
 * - 프로필 이미지 (원형)
 * - 사용자 이름
 * - 소개 텍스트
 * - 소셜 미디어 링크 (Instagram, GitHub, Email)
 */

import { Instagram, Github, Mail } from 'lucide-react';

interface ProfileSectionProps {
  name: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    instagram?: string;
    github?: string;
    email?: string;
  };
}

export default function ProfileSection({ 
  name, 
  bio, 
  imageUrl, 
  socialLinks 
}: ProfileSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* 프로필 이미지 */}
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-pink-300"
        />
      </div>

      {/* 이름 */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        {name}
      </h2>

      {/* 소개 텍스트 */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {bio}
      </p>

      {/* 소셜 링크 */}
      <div className="flex gap-3">
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pink-300 text-white hover:bg-pink-400 transition-colors"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram size={18} />
          </a>
        )}

        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pink-300 text-white hover:bg-pink-400 transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        )}

        {socialLinks.email && (
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pink-300 text-white hover:bg-pink-400 transition-colors"
            aria-label="Email"
            title="Email"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>
  );
}