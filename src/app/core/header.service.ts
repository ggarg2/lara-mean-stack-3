export class HeaderService{

    logoUrl: string = "assets/images/11.png"
    
    menus : any[] = [
    {
        displayName: 'Home',
        url : 'home'
    },
    {
        displayName: 'Dashboard',
        url : 'dashboard'
    },
    {
        displayName: 'Contact Us',
        url : 'contact-us '
    },
    {
        displayName: 'Login',
        url : 'login'
    },
    {
        displayName: 'About US',
        url : 'about-us'
    },

    ]

    getMenus(){
        return this.menus;
    }

    getLogoUrl(){
        return this.logoUrl;
    }
}