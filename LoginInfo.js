window.ethereum = null;

export const LoginType = {
    Email: 'Email',
    Phone: 'Phone',
    JWT: 'JWT',
    Google: 'Google',
    Facebook: 'Facebook',
    Apple: 'Apple',
    Discord: 'Discord',
    Github: 'Github',
    Twitch: 'Twitch',
    Microsoft: 'Microsoft',
    Linkedin: 'Linkedin',
    Twitter: 'Twitter'
  };
  
  export const SupportAuthType = {
    None: 'None',
    Email: 'Email',
    Phone: 'Phone',
    Google: 'Google',
    Facebook: 'Facebook',
    Apple: 'Apple',
    Discord: 'Discord',
    Github: 'Github',
    Twitch: 'Twitch',
    Microsoft: 'Microsoft',
    Linkedin: 'Linkedin',
    Twitter: 'Twitter',
    All: 'All'
  };
  
  export const iOSModalPresentStyle = {
    FullScreen: 'fullScreen',
    FormSheet: 'formSheet'
  };
  
  export const Env = {
    Dev: 'Dev',
    Staging: 'Staging',
    Production: 'Production'
  };


  export const GoerliChain = {
    chain_name: Ethereum,
    chain_id: 5,
     chain_id_name: Sepolia
 }
 export class ParticleInfo {
    static projectId = '';
    static clientKey = '';
  }
  