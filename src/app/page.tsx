import ClientSide from "./ClientSide";

export default async function Home() {
  const users = await fetch("https://api.jsoning.com/mock/public/users");
  const userResponse: { id: string; firstname: string }[] = await users.json();

  return (
    <div>
      <p>Coupon winners of the day:</p>
      {userResponse?.map((user) => {
        return (
          <p key={user.id}>
            {user.id} - {user.firstname}
          </p>
        );
      })}
      <p> Their prize: </p>
      <ClientSide />
    </div>
  );
}
