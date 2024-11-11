import React from 'react';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      name: 'SecuSTATION 防犯カメラ',
      image: 'https://s2.loli.net/2024/11/11/VqkjhEgZmlUazi6.jpg',
    },
    {
      id: 2,
      name: 'WTW 防犯カメラ',
      image: 'https://s2.loli.net/2024/11/11/UdqnQXLbifZrcAB.jpg',
    },
    {
      id: 3,
      name: '加湿器 6L',
      image: 'https://s2.loli.net/2024/11/11/f62t9iamEA7WcR4.jpg',
    },
    {
      id: 4,
      name: 'LIGHTEN 加湿器',
      image: 'https://s2.loli.net/2024/11/11/idboe21XjYauEOw.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">苏儿朵</span>
            </h1>
            <p className="text-xl font-light">创新科技 连接世界</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">关于我们</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            我们是一家专注跨境电商的创新企业，致力于将全球优质商品带给更多消费者。我们提供多品类商品选择，严控品质，并依托先进的供应链管理系统，确保高效、可靠的物流服务。我们始终关注市场趋势，以优质服务和创新产品，为客户带来便捷独特的购物体验。
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">公司业务</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">全球优选</h3>
              <p className="text-gray-600">
                精选全球优质商品，为消费者提供多样化的选择，确保每一件商品都符合高品质标准。
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">智能供应链</h3>
              <p className="text-gray-600">
                采用先进的供应链管理系统，提供高效可靠的物流服务，确保商品快速送达客户手中。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">产品展示</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">联系我们</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">广州苏儿朵信息科技有限公司</h3>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-600" />
                <span className="text-lg">suwl27@163.com</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 苏儿朵. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;