import { ImageResponse } from "next/server";
import { getUser } from "@/service/api-github";
import { dateFormat } from "@/lib/date-format";

export const runtime = "edge";
export const contentType = "image/png";

export default async function Image({ params: { user } }) {
  const profile = await getUser(user);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "32px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(24 24 27)",
          lineHeight: "20px",
          gap: "40px",
          padding: "40px 50px",
        }}
      >
        <div
          style={{
            color: "rgb(236 237 238)",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "24px",
            }}
          >
            <img
              style={{ display: "flex", borderRadius: "16px" }}
              src={profile.avatar_url}
              alt={profile.name}
              width="240"
              height="240"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  padding: "0",
                  margin: "0",
                  opacity: "0.9",
                  fontSize: "40px",
                }}
              >
                {profile.name}
              </p>
              <p
                style={{
                  display: "flex",
                  padding: "0",
                  margin: "0",
                  opacity: "0.8",
                  fontSize: "24px",
                }}
              >
                @{profile.login}
              </p>
              <p
                style={{
                  display: "flex",
                  padding: "0",
                  margin: "0",
                  fontSize: "24px",
                }}
              >
                {dateFormat(profile.created_at)}
              </p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              opacity: "0.9",
              padding: "0",
              margin: "0",
              textAlign: "right",
              lineHeight: "30px",
              fontSize: "30px",
            }}
          >
            {profile?.location}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "16px",
            padding: "16px",
            backgroundColor: "rgb(9 9 11)",
            color: "rgb(236 237 238)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                display: "flex",
                padding: "0",
                margin: "0",
                fontSize: "1.75rem",
                color: "rgb(161 161 170)",
              }}
            >
              Repos
            </p>
            <p
              style={{
                display: "flex",
                fontSize: "2.25rem",
                padding: "0",
                margin: "0",
                fontWeight: "bold"
              }}
            >
              {profile.public_repos}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                display: "flex",
                padding: "0",
                margin: "0",
                fontSize: "1.75rem",
                color: "rgb(161 161 170)",
              }}
            >
              Seguidores
            </p>
            <p
              style={{
                display: "flex",
                fontSize: "2.25rem",
                padding: "0",
                margin: "0",
                fontWeight: "bold"
              }}
            >
              {profile.followers}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                display: "flex",
                padding: "0",
                margin: "0",
                fontSize: "1.75rem",
                color: "rgb(161 161 170)",
              }}
            >
              Seguidos
            </p>
            <p
              style={{
                display: "flex",
                fontSize: "2.25rem",
                padding: "0",
                margin: "0",
                fontWeight: "bold"
              }}
            >
              {profile.following}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 500,
    }
  );
}
