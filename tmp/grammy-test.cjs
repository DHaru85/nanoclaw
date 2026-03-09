const { Bot } = require('grammy');

const proxyUrl = process.env.HTTPS_PROXY;
console.log('Proxy URL:', proxyUrl);

if (proxyUrl) {
  import('undici').then((undici) => {
    const proxyAgent = new undici.ProxyAgent(proxyUrl);
    undici.setGlobalDispatcher(proxyAgent);
    console.log('✓ Global ProxyAgent configured');
    
    const bot = new Bot('8761953497:AAHhevaXKD2k8rr3a2OCee0NiIuw6EeQF7k');
    console.log('✓ Bot created, attempting to start...');
    
    bot.start({
      onStart: (info) => {
        console.log('✅ Bot started successfully:', info.username);
        bot.stop();
        process.exit(0);
      },
    });
    
    setTimeout(() => {
      console.log('❌ Timeout - bot.start() did not complete');
      process.exit(1);
    }, 10000);
  });
}