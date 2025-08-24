import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample gallery data with placeholder images and captions
 const galleryImages = [
  // HAIR SERVICES (12 images) - Popular in Nairobi
  {
    id: 1,
    src: "https://i.pinimg.com/1200x/52/09/70/5209701d2279068b34be204a0dd799ee.jpg",
    caption: "Cornrows & Braids",
    category: "Hair"
  },
  {
    id: 2,
    src: "https://i.pinimg.com/1200x/cb/54/56/cb545657655b24f779b9aa527ecebf17.jpg",
    caption: "Natural Hair Twist-Out",
    category: "Hair"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/1200x/6a/4d/ac/6a4dac22de184b3353675a41ad1bd68f.jpg",
    caption: "Balayage Color",
    category: "Hair"
  },
  {
    id: 4,
    src: "https://i.pinimg.com/1200x/c3/9f/44/c39f4416d1e9f2ed10cc4670553676af.jpg",
    caption: "Big Box Braids",
    category: "Hair"
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/b3/0f/9b/b30f9be6132542f0e528c358bc033c1c.jpg",
    caption: "Pixie Cut",
    category: "Hair"
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/f1/46/87/f146877fef98d64f0b64a8dc3aa30015.jpg",
    caption: "Knotless Braids",
    category: "Hair"
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/12/ff/0a/12ff0ad0faa6bb316741c56475586110.jpg",
    caption: "Afro Natural Style",
    category: "Hair"
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/db/3f/c3/db3fc3373ed62132907183efb28e2269.jpg",
    caption: "Coco twist",
    category: "Hair"
  },
  {
    id: 9,
    src: "https://i.pinimg.com/736x/6c/f4/36/6cf436cbee3c64d2934bd64e3f31df5d.jpg",
    caption: "Weave Installation",
    category: "Hair"
  },
  {
    id: 10,
    src: "https://i.pinimg.com/736x/f5/a7/00/f5a70092b2e6b8081d2f7f205806331f.jpg",
    caption: "Locs Maintenance",
    category: "Hair"
  },
  {
    id: 11,
    src: "https://i.pinimg.com/736x/1d/eb/46/1deb463563027c4b5a3399302c7afc16.jpg",
    caption: "Bantu Knots",
    category: "Hair"
  },
  {
    id: 12,
    src: "https://i.pinimg.com/1200x/c6/31/d9/c631d9cabd395a806622174370e54f2e.jpg",
    caption: "Hair Relaxing Treatment",
    category: "Hair"
  },

  // NAIL SERVICES (12 images)
  {
    id: 13,
    src: "https://i.pinimg.com/1200x/a9/e1/e1/a9e1e177e847471b5bc4e79979dbf1f6.jpg",
    caption: "Gel Nails",
    category: "Nails"
  },
  {
    id: 14,
    src: "https://i.pinimg.com/1200x/f0/b5/eb/f0b5eb857b9c43ee2c325e5d612fe0b1.jpg",
    caption: "French Manicure",
    category: "Nails"
  },
  {
    id: 15,
    src: "https://i.pinimg.com/1200x/cd/2b/4b/cd2b4b6aba3719923cf9ba1c0a6892d0.jpg",
    caption: "Nude Nails",
    category: "Nails"
  },
  {
    id: 16,
    src: "https://i.pinimg.com/1200x/9a/33/e0/9a33e0cc7530eb6ccd68fa52be2c4e64.jpg",
    caption: "Acrylic Extensions",
    category: "Nails"
  },
  {
    id: 17,
    src: "https://i.pinimg.com/736x/32/b6/68/32b6688fa5dbfbf7e7928a4b965f8de9.jpg",
    caption: "Ombre Nails",
    category: "Nails"
  },
  {
    id: 18,
    src: "https://i.pinimg.com/1200x/a6/5d/95/a65d95017ce8a6dbc207b6be791c8131.jpg",
    caption: "Matte Finish",
    category: "Nails"
  },
  {
    id: 19,
    src: "https://i.pinimg.com/736x/5c/31/69/5c3169b98c9e56aeee1ad9cb66374d2e.jpg",
    caption: "Glitter Nails",
    category: "Nails"
  },
  {
    id: 20,
    src: "https://i.pinimg.com/736x/5f/b3/24/5fb324c74990db2e9626c52e0237f227.jpg",
    caption: "Chrome Effect",
    category: "Nails"
  },
  {
    id: 21,
    src: "https://i.pinimg.com/1200x/e0/4c/84/e04c8432e76c15dede61f64525f60cad.jpg",
    caption: "Marble Design",
    category: "Nails"
  },
  {
    id: 22,
    src: "https://i.pinimg.com/1200x/e1/10/7d/e1107df7f2ad268416ca80d89e45db10.jpg",
    caption: "Stiletto Shape",
    category: "Nails"
  },
  {
    id: 23,
    src: "https://i.pinimg.com/736x/30/76/f5/3076f59d7fa9b9d9b98bdcf580e6d4c5.jpg",
    caption: "Natural Polish",
    category: "Nails"
  },
  {
    id: 24,
    src: "https://i.pinimg.com/1200x/42/cc/36/42cc36554cfe7a9058a5a11660eab17b.jpg",
    caption: "coffin nails",
    category: "Nails"
  },

  // SPA SERVICES (12 images)
  {
    id: 25,
    src: "https://i.pinimg.com/1200x/53/6d/38/536d38fcd4e72d474fdd1c0f7452c2f7.jpg",
    caption: "Relaxing Massage",
    category: "Spa"
  },
  {
    id: 26,
    src: "https://i.pinimg.com/736x/d3/06/32/d3063255870ef55babea8294b8e537bd.jpg",
    caption: "Deep Cleansing Facial",
    category: "Spa"
  },
  {
    id: 27,
    src: "https://i.pinimg.com/1200x/88/e0/62/88e0622e26a6201b58a3601762e0310d.jpg",
    caption: "Hot Stone Therapy",
    category: "Spa"
  },
  {
    id: 28,
    src: "https://i.pinimg.com/1200x/dc/03/c0/dc03c0f5ad61acbe33fbbcac1d67592a.jpg",
    caption: "Aromatherapy Treatment",
    category: "Spa"
  },
  {
    id: 29,
    src: "https://i.pinimg.com/736x/db/1b/40/db1b4074f45bc20b80bb1e37f7f4d593.jpg",
    caption: "Body Scrub & Wrap",
    category: "Spa"
  },
  {
    id: 30,
    src: "https://i.pinimg.com/1200x/79/38/df/7938dff8e9faca9f8c3a195319c7e36f.jpg",
    caption: "Steam & Sauna",
    category: "Spa"
  },
  {
    id: 31,
    src: "https://i.pinimg.com/736x/8c/cd/00/8ccd0039863bdc199018a95a515d22ca.jpg",
    caption: "Lymphatic Drainage",
    category: "Spa"
  },
  {
    id: 32,
    src: "https://i.pinimg.com/1200x/27/52/7b/27527bfeebbb8510c35480e1a2599292.jpg",
    caption: "Reflexology",
    category: "Spa"
  },
  {
    id: 33,
    src: "https://i.pinimg.com/736x/96/73/db/9673db476d3494be651bc27a19dbdb70.jpg",
    caption: "Mud Therapy",
    category: "Spa"
  },
  {
    id: 34,
    src: "https://i.pinimg.com/1200x/a6/85/24/a68524f475bcc0a6105dfcfafbb85ad5.jpg",
    caption: "Couples Massage",
    category: "Spa"
  },
  {
    id: 35,
    src: "https://i.pinimg.com/736x/59/b3/c0/59b3c0e608bfd23632d9991c4050edc5.jpg",
    caption: "Anti-Aging Facial",
    category: "Spa"
  },
  {
    id: 36,
    src: "https://i.pinimg.com/736x/85/f5/c2/85f5c24ba62bc0d08e58c105a1367d7e.jpg",
    caption: "Detox Treatment",
    category: "Spa"
  },

  // MAKEUP SERVICES (12 images)
  {
    id: 37,
    src: "https://i.pinimg.com/1200x/df/16/eb/df16ebe38477c882cf9729cd76d244c2.jpg",
    caption: "Bridal Makeup",
    category: "Makeup"
  },
  {
    id: 38,
    src: "https://i.pinimg.com/736x/08/67/f7/0867f717a919b0abf4d7ac22310e6da7.jpg",
    caption: "Smokey Eyes",
    category: "Makeup"
  },
  {
    id: 39,
    src: "https://i.pinimg.com/736x/38/a1/43/38a1433b2462e17b8d91253b90515d44.jpg",
    caption: "Natural Glow",
    category: "Makeup"
  },
  {
    id: 40,
    src: "https://i.pinimg.com/736x/b7/b8/49/b7b849150a0b58832864cba5594daa4b.jpg",
    caption: "Editorial Makeup",
    category: "Makeup"
  },
  {
    id: 41,
    src: "https://i.pinimg.com/1200x/75/e4/37/75e4375b210c9404efc02b65a9fa3a05.jpg",
    caption: "Contouring & Highlight",
    category: "Makeup"
  },
  {
    id: 42,
    src: "https://i.pinimg.com/1200x/fc/22/02/fc22029b02160c391a57fde89f5be3b6.jpg",
    caption: "Bold Lip Colors",
    category: "Makeup"
  },
  {
    id: 43,
    src: "https://i.pinimg.com/736x/f8/e3/8e/f8e38e1c7e458b5bb37e02e072155f12.jpg",
    caption: "Cut Crease Eyes",
    category: "Makeup"
  },
  {
    id: 44,
    src: "https://i.pinimg.com/1200x/e5/3d/58/e53d58a13bec5d08317c50a932776fb7.jpg",
    caption: "Party Glam",
    category: "Makeup"
  },
  {
    id: 45,
    src: "https://i.pinimg.com/736x/a1/5f/0e/a15f0e50e68c68187468d9d1362977f3.jpg",
    caption: "Dewy Skin Finish",
    category: "Makeup"
  },
  {
    id: 46,
    src: "https://i.pinimg.com/736x/40/ef/74/40ef74f9c1f24b00ff101b718a77c6e0.jpg",
    caption: "Monochromatic Look",
    category: "Makeup"
  },
  {
    id: 47,
    src: "https://i.pinimg.com/1200x/a5/bb/01/a5bb018beb846651d58cde65cd0ff66f.jpg",
    caption: "Winged Eyeliner",
    category: "Makeup"
  },
  {
    id: 48,
    src: "https://i.pinimg.com/1200x/a3/79/6e/a3796e4425d7039f5054a2ce50f61ab3.jpg",
    caption: "Vintage Glam",
    category: "Makeup"
  },

  // PEDICURE SERVICES (12 images)
  {
    id: 49,
    src: "https://i.pinimg.com/1200x/ca/65/de/ca65deca5368b7765116d0c22e80f3a1.jpg",
    caption: "Classic Pedicure",
    category: "Pedicure"
  },
  {
    id: 50,
    src: "https://i.pinimg.com/1200x/8d/a7/09/8da7090e9a07de2a8280f189fc9935a3.jpg",
    caption: "Spa Pedicure",
    category: "Pedicure"
  },
  {
    id: 51,
    src: "https://i.pinimg.com/736x/25/4b/e6/254be6a09aa3dd88250d2d213af03b98.jpg",
    caption: "French Toe Nails",
    category: "Pedicure"
  },
  {
    id: 52,
    src: "https://i.pinimg.com/1200x/5b/1d/1e/5b1d1ef5f17d99601cdbc12b4fa668ff.jpg",
    caption: "Gel Toe Polish",
    category: "Pedicure"
  },
  {
    id: 53,
    src: "https://i.pinimg.com/736x/ea/7b/9e/ea7b9e08846df55c468d5a6a1cf6e14b.jpg",
    caption: "Foot Scrub Treatment",
    category: "Pedicure"
  },
  {
    id: 54,
    src: "https://i.pinimg.com/736x/ac/d4/55/acd4551d08e31b6325371fc0cfadbff5.jpg",
    caption: "Callus Removal",
    category: "Pedicure"
  },
  {
    id: 55,
    src: "https://i.pinimg.com/736x/d1/5e/c3/d15ec3ede4f9c1463b8a2f91243266e5.jpg",
    caption: "Paraffin Foot Treatment",
    category: "Pedicure"
  },
  {
    id: 56,
    src: "https://i.pinimg.com/1200x/f5/a3/78/f5a3787cacfa07bcf75373fe476093e5.jpg",
    caption: "Nail Art on Toes",
    category: "Pedicure"
  },
  {
    id: 57,
    src: "https://i.pinimg.com/736x/25/37/93/2537936d364ca2222725f36e1fefdc6f.jpg",
    caption: "Express Pedicure",
    category: "Pedicure"
  },
  {
    id: 58,
    src: "https://i.pinimg.com/1200x/09/68/a8/0968a88b8d7944ea8b2ec941fa062ba6.jpg",
    caption: "Medical Pedicure",
    category: "Pedicure"
  },
  {
    id: 59,
    src: "https://i.pinimg.com/1200x/2e/52/90/2e529063d8c1e8b00303cb265108c4a4.jpg",
    caption: "Hot Stone Pedicure",
    category: "Pedicure"
  },
  {
    id: 60,
    src: "https://i.pinimg.com/1200x/f0/f7/f1/f0f7f1f6be04e57e86712ad90a17e197.jpg",
    caption: "Luxury Pedicure Package",
    category: "Pedicure"
  },

  // ADDITIONAL POPULAR SALON SERVICES IN NAIROBI (12 images)
  {
    id: 61,
    src: "https://i.pinimg.com/1200x/34/6d/d5/346dd5b177503c92bdea2935515a0a94.jpg",
    caption: "Eyebrow Threading",
    category: "Beauty"
  },
  {
    id: 62,
    src: "https://i.pinimg.com/736x/9f/fe/54/9ffe54f2e851cf63605de24d70bea731.jpg",
    caption: "Lash Extensions",
    category: "Beauty"
  },
  {
    id: 63,
    src: "https://i.pinimg.com/1200x/db/bc/df/dbbcdf96b89765c96341a2767404d033.jpg",
    caption: "Henna Tattoo",
    category: "Beauty"
  },
  {
    id: 64,
    src: "https://i.pinimg.com/736x/f4/66/d3/f466d34c39fdd86500e888d294dae3fb.jpg",
    caption: "Skin Lightening Treatment",
    category: "Beauty"
  },
  {
    id: 65,
    src: "https://i.pinimg.com/736x/11/5e/16/115e16a9f52501470102c6101b3ebe4a.jpg",
    caption: "Body Piercing",
    category: "Beauty"
  },
  {
    id: 66,
    src: "https://i.pinimg.com/736x/76/86/92/768692647f0527030ff9f8f2bfd11cf9.jpg",
    caption: "Hair Spa Treatment",
    category: "Beauty"
  },
  {
    id: 67,
    src: "https://i.pinimg.com/736x/56/ac/48/56ac4874ee03f39ca502d130656e3ae9.jpg",
    caption: "Scalp Massage",
    category: "Beauty"
  },
  {
    id: 68,
    src: "https://i.pinimg.com/1200x/67/6e/4a/676e4ad3c8ea4be3155b146548ad5774.jpg",
    caption: "Body Waxing",
    category: "Beauty"
  },
  {
    id: 69,
    src: "https://i.pinimg.com/1200x/c4/22/d8/c422d83a17609854e2a1576583c692e3.jpg",
    caption: "Face Waxing",
    category: "Beauty"
  },
  {
    id: 70,
    src: "https://i.pinimg.com/1200x/e9/64/c5/e964c55fd4862853de98235079c3ad5b.jpg",
    caption: "Microdermabrasion",
    category: "Beauty"
  },
  {
    id: 71,
    src: "https://i.pinimg.com/1200x/74/6f/59/746f59ce7410ab5256f9fb7b0b572345.jpg",
    caption: "Chemical Peel",
    category: "Beauty"
  },
  {
    id: 72,
    src: "https://i.pinimg.com/736x/1e/25/14/1e2514bc3888140eb390d4cb72dc9c64.jpg",
    caption: "Microblading",
    category: "Beauty"
  }
];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyPress = (e) => {
    if (!selectedImage) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header Section */}
      <div className={`text-center py-16 px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Our Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Transformations & styles created with love
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                aspectRatio: '3/4'
              }}
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 border border-white/30">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {image.caption}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 py-16">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Love what you see?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment today and let us create your perfect look
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 border border-white/30">
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {selectedImage.caption}
                  </h3>
                  <p className="text-white/80">
                    {selectedImage.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Gallery;