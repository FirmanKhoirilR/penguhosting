export const userQuery = (userId: string) => {
  const query = `*[_type == "user" && _id == '${userId}']`;

  return query;
};

export const blogDetail = (id: string | any) => {
  const query = `*[_type == "pin" && _id == '${id}'] {
    image{
      asset->{
        url
      }
    },
        _id,
        description,
        title,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;

  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      description,
      title,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;
