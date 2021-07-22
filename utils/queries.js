import { groq } from "@nuxtjs/sanity";

const bodyQuery = groq`
...,

content[] {
    ...,

    _type == 'starTestimonialsSection' => {
    'testimonials':*[_type == 'testimonialsStars'] {
      name,
      date,
      starts,
      review,
    }
  },

  _type == 'locations' => {
    'locations' : *[_type == 'location']
  },

  _type == 'imageTestimonialsSection' => {
    'testimonials':*[_type == 'testimonialsNormal'] {
      text,
      image
    }
  },

  _type == 'blogsSection' => {
    'blogs':*[_type == 'blog'] {
      title,
      date,
      excerpt,
      'slug':slug.current
    }
  },

    _type == 'richText' => {
    
    'pages':*[_type == 'nav'] {
      sidebar
    },

    'sidebarPages':*[_type == 'inPageMenus'][1].links[] -> {
      title,
      'slug':slug.current
    },
    
  },

    _type == 'serviceGrid' => {
   
    collection,

    'pages': collection->pages[]->,
      
    
   
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

  button -> {
  title,
  'slug':slug.current
},
  
  links[] {
    display,
    internal,



    'slug':internalPage -> slug.current,
    
    
    children[] {
      display,
      internal,
      'slug':internalPage -> slug.current
    },

    
  }
}
`;

export const blogQuery = param => {
  return `*[_type == 'blog' && defined(slug) && slug.current == '${param}'][0] {
    ...,
    title,
    text,

   

    'otherBlogs': *[_type == 'blog' && defined(slug) && slug.current != '${param}'] {
      title,
      excerpt,
      date
    }
  }`;
};

export const homeQuery = () => {
  return `*[_type =='home' && defined(slug)][0] {

    ${bodyQuery}
}`;
};

export const footerQuery = groq`*[_type == 'location']
`
