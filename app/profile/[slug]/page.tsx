import ProfileCard   from "@/components/ProfileCard";
import { dummyProfiles } from "@/lib/data";
import { unstable_ViewTransition as ViewTransition } from "react";

export function generateStaticParams() {
  return dummyProfiles.map((profile) => ({
    slug: profile.slug,
  }));
}

interface ProfilePageProps {
  params: {
    slug: string;
  };
}
export default async function ProfilePage({ params }: ProfilePageProps) {
  const profile = dummyProfiles.find((profile) => profile.slug === params.slug);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <ViewTransition name={`box-${profile.slug}`}>
      <div className="flex flex-col items-center justify-center h-screen">
        <ProfileCard {...profile} />
      </div>
    </ViewTransition>
  );
}
///>
