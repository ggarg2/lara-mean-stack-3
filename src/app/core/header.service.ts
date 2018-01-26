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
        icon: 'dashboard'
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
        icon: 'settings_power'
    }
    

    ]

    getMenus(){
        return this.menus;
    }

    getLogoUrl(){
        return this.logoUrl;
    }
}