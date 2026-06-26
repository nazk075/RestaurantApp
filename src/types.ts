/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  tags?: string[];
}

export interface SignatureDish {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  ingredients: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: string;
}
