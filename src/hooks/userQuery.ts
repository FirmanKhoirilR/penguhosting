export const userQuery = (userId: string) => {
  //get only user in sanity document specific by UserId as a params
  const query = `*[_type == "user" && _id == '${userId}']`;

  return query;
};

export const blogDetail = (id: string | any) => {
  //get only pin/blog in sanity document specific by blog id as a params
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

// feedQuery get all the data inside of pin sanity document
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
