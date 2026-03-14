import { URLSearchParams } from 'url';


export async function get_active_discount(template_id: number) {
    const baseUrl = process.env.ADMIN_BASE_URL;
    const key = process.env.ADMIN_API_KEY;
    const secret = process.env.ADMIN_API_SECRET;
        
    const params = new URLSearchParams({
        'template_id': `${template_id}`,
    });
    
    const url = `${baseUrl}/method/admin.admin.api.web.current_active_discount?${params}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `token ${key}:${secret}`,
            },
        });
        
        console.log('Response status:', response.status);
        return response.json();
    } catch (error) {
        console.error('Fetch error details:', error);
        throw error;
    }
}
