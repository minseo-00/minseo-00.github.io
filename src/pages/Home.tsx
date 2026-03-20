import ProfileSection from '../components/ProfileSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header는 이미 있다고 가정 */}
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* 좌측: 프로필 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <ProfileSection
                name="Ballet Tech"
                bio="발레와 기술의 교집합을 탐구하는 개발자입니다."
                imageUrl="https://via.placeholder.com/150"
                socialLinks={{
                  instagram: "https://instagram.com",
                  github: "https://github.com/minseo-00",
                  email: "hello@ballettech.com",
                }}
              />
            </div>

            {/* 우측: 포스트 리스트 (다음 단계에서 추가 ) */}
            <div className="md:col-span-3">
              <h1 className="text-3xl font-bold mb-8">최신 포스트</h1>
              {/* 포스트 리스트가 여기 들어갈 예정 */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer는 이미 있다고 가정 */}
    </div>
  );
}