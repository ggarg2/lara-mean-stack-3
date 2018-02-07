export class HeaderService{

    logoUrl: string = "assets/images/11.png"
    
    menus : any[] = [
    {
        displayName: 'Home',
        url : 'home',
        icon:'home'
    },
    {
        displayName: 'Dashboard',
        url : 'dashboard',
        icon: 'dashboard',
        isAuthRequired: true        
    },
    {
        displayName: 'About US',
        url : 'about-us',
        icon: 'supervisor_account'              
    },
    {
        displayName: 'Contact Us',
        url : 'contact-us',
        icon: 'settings_phone'       
    },
    {
        displayName: 'Login',
        url : 'login',
        icon: 'settings_power',
        isAuthRequired: false        
    },
    {
        displayName: 'Registration',
        url : 'registration',
        icon: 'settings_power',
        isAuthRequired: false        
    },
    {
        displayName: 'Logout',
        url : 'login?isAuthRequired=true',
        icon: 'settings_power',
        isAuthRequired: true        
    }
    

    ]

    getMenus(){
        return this.menus;
    }

    getLogoUrl(){
        return this.logoUrl;
    }
}