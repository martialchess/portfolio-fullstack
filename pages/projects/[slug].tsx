// pages/projects/[slug].tsx

import React from "react";
import { useRouter } from "next/router";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
    </div>
  );
};

export default ProjectDetailPage;
