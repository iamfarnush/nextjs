interface ShopPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function UserPage({ params }: ShopPageProps) {
  const { slug } = await params;

  

  return <div className="text-black">ID: {slug}</div>;
}
