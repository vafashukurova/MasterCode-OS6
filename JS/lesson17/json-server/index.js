function getUsersData(){
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then(data=>console.log(data))
}

getUsersData();

//? status kodlari haqqinda melumat ver
// 1xx: Bu, sorğunun müştəri (İstifadəçi) tərəfindən server tərəfinə qəbul edildiyini göstərən məlumat kodudur.

// 2xx: Bunlar müştəri (İstifadəçi) tərəfindən serverə göndərilən sorğunun server tərəfindən təsdiqləndiyini və müştəri (İstifadəçi) tərəfinə uğurla göndərildiyini göstərən status kodlarıdır.

// 3xx: Müştərinin (istifadəçinin) müraciət etmək istədiyi səhifənin başqa səhifəyə köçürüldüyünü və ona çatmaq üçün səhifənin yönləndirilməsinin edildiyini göstərən status kodları.

// 4xx: Xəta Vəziyyəti Kodu, müştəri tərəfindən edilən sorğunun server tərəfində qarşı tərəf olmadığını göstərir, buna görə də xəta alınır.

// 5xx: Bu, müştəri tərəfindən edilən sorğunun serverə çatdığını, lakin serverlə bağlı problemlər səbəbindən sorğunun yerinə yetirilə bilmədiyini göstərən xəta statusu kodudur.

//? 200: Müştəri tərəfindən göndərilən sorğunun server tərəfindən uğurla göndərildiyini və müştəri tərəfinə çatdığını göstərən Uğurlu Əməliyyat Vəziyyəti Kodu.
//? 201: Server tərəfindən tələb olunan sorğunun yerinə yetirildiyini bildirir.
// 429-coxlu sorgular gonderdikden sonra server url-e girisi block edilir
