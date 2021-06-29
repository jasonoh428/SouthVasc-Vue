import { groq } from "@nuxtjs/sanity";

const bodyQuery = groq`
...,

content[] {
    ...,
    _type == 'serviceGrid' => {
    _key,
    
    'pages': *[_type == 'page' && defined(category) && references(^.category -> _id)]
  }
  }
`;

export const pageQuery = param => {
  return `*[_type == 'page' && defined(slug) && slug.current == '${param}'][0] {
${bodyQuery}
    }`;
};

export const navQuery = groq`

*[_type == 'nav'][0] {
  links[] {
    display,
    internal,

    'slug':internalPage -> slug.current,
    
    
    children[] {
      display,
      internal,
      'slug':internalPage -> slug.current
    }
  }
}
`
