# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Service.destroy_all
Review.destroy_all
Company.destroy_all
Leader.destroy_all
ImageCarousel.destroy_all

service1 = Service.create!(
    name: 'Draw A Roadmap',
    short_description: 'Together, we work with you to build your plan for the next year—or five!',
    long_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet porttitor tortor. Maecenas mollis rhoncus lacus sed vehicula. Duis laoreet fermentum ex, nec scelerisque mauris cursus ac. Mauris vel euismod quam. Etiam auctor sapien cursus enim feugiat mattis. Aenean ac orci sit amet metus porta feugiat euismod in ligula. Curabitur sagittis rhoncus purus vitae feugiat. Cras volutpat id eros sit amet lobortis. Etiam sollicitudin lacus quis mauris mattis, nec aliquam nulla scelerisque. Curabitur lacinia at diam tincidunt porta. Duis eu facilisis erat, eget porta nunc.'
)

service2 = Service.create!(
    name: 'Define Values',
    short_description: 'We define the values for your company',
    long_description: 'Proin blandit quam eros, nec mollis nibh scelerisque sed. Vestibulum auctor condimentum dolor nec pharetra. Aenean tempor mattis feugiat. Nunc dictum tincidunt velit, id faucibus lorem hendrerit id. Maecenas sed mollis sem, ac suscipit nisl. Nam placerat nulla vitae massa finibus hendrerit. Suspendisse semper risus augue, non efficitur diam tincidunt ullamcorper.'
)

service3 = Service.create!(
    name: 'Find Tools',
    short_description: 'We work to identify tools that will save you time and money',
    long_description: 'Fusce pretium, sem a ullamcorper auctor, velit magna vestibulum turpis, ut posuere mi ex a libero. Sed molestie venenatis turpis, non luctus erat porta id. Nullam sed orci et dolor hendrerit rhoncus sit amet in nisi. Morbi nunc dui, bibendum vel erat sed, lacinia mattis metus. Nam volutpat efficitur sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eget ex pulvinar, euismod quam id, imperdiet libero.'
)

service4 = Service.create!(
    name: 'Build A Community',
    short_description: 'We leverage social media to find you a community of supporters',
    long_description: 'Phasellus at semper sapien. Nam efficitur venenatis tortor, at convallis neque pharetra id. Ut a sapien ac velit condimentum dignissim. Donec sollicitudin consequat pulvinar. Etiam rhoncus ex id pharetra laoreet. In vehicula est a purus pulvinar, eu vulputate elit scelerisque. Nullam eu maximus felis, et vulputate massa. Duis faucibus sagittis est, vel rhoncus nulla ornare ut. Sed pellentesque orci ac arcu vulputate, eget venenatis nisl hendrerit.'
)

review1 = Review.create!(
    reviewer_name: 'Scott Prost',
    reviewer_description: 'Sr. Director of Operations',
    reviewer_location: 'Company, LLC',
    title: 'Review',
    body: 'Athira did wonders for our company. Our company culture has been focused and driven towards our new goals.'
)

review2 = Review.create!(
    reviewer_name: 'Wen Gao Li',
    reviewer_description: 'Sr. Director of Operations',
    reviewer_location: 'Company, LLC',
    title: 'Review',
    body: 'After a year of working with Athira, I have saved hundreds of thousands of dollars in scaling costs for services that I would have otherwise spent on pricey consultants.'
)

review3 = Review.create!(
    reviewer_name: 'Maria Lorenza',
    reviewer_description: 'Sr. Director of Operations',
    reviewer_location: 'Company, LLC',
    title: 'Review',
    body: 'I have nothing but wonderful things to say about my time working with Ria.'
)

company1 = Company.create!(
    name: 'Athira',
    headline: 'Light The Fire, Grow Your Dream',
    short_description: 'Athira helps companies scale by selecting infrastructure, developing social media plans and defining a brand and values.',
    long_description: 'Founded in 2016, Athira is a different kind of company. We are focused on developing solutions for non-profit clients seeking to scale their organization to meet new, larger goals that was previously possible. We are dedicated to helping young and aspiring by creating and implementing business support solutions. We believe in listening to our clients and helping to build a joint strategy for growth and anchoring that strategy by training new and existing staff. Backed by hard-won experience with numerous high profile clients, you can trust Athira to kindle new life into your organization.',
    splash_image_url: 'https://images.unsplash.com/photo-1473041117018-269bc8c130de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cad94ead49f0eefefec9b33067633fb8&auto=format&fit=crop&w=1908&q=80'
)

leader1 = Leader.create!(
    name: 'M Ria Shah',
    title: 'Owner',
    description: 'Ria is a global financial and operations professional with 18 years of experience in international non-profit, the digital market place, higher education, auditing and consulting, specializing in the early growth phase of emerging comanies.',
    headshot_url: 'http://gdurl.com/t08f'
)

image_carousel1 = ImageCarousel.create!(
    location: 'home',
    urls: [
        'https://images.unsplash.com/photo-1520428166013-aa14a295cb19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8203a433fe2a2c11251cb6ac6438855c&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1493551511613-abc8320c265e?ixlib=rb-0.3.5&s=a7ca157eedcbcdbbcf7286ffc545c480&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1491146179969-d674118945ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a322c74c18eb76a9884e03724ddf7a9&auto=format&fit=crop&w=2978&q=80',
        'https://images.unsplash.com/photo-1444663837429-d2d894a77c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cca3645c73e16e83608ffe03b414e13&auto=format&fit=crop&w=1992&q=80'
    ],
    headline: 'Light the Fire, Grow Your Dream'
)

image_carousel2 = ImageCarousel.create!(
    location: 'about',
    urls: [
        'https://images.unsplash.com/photo-1455793067932-146d5b4a694f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a99a121c6a007e3cc9ecda129bb61a1&auto=format&fit=crop&w=934&q=80',
        'https://images.unsplash.com/photo-1467241850596-6a0de48568da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c1f57e313ec82598cfb80047483e93a&auto=format&fit=crop&w=933&q=80',
        'https://images.unsplash.com/photo-1518707101210-10794fcdc3f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d124d3625023f15aa18624f0295b4173&auto=format&fit=crop&w=1955&q=80',
        'https://images.unsplash.com/photo-1518008931783-51b25ba2ccc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87a6a9889936a62f928eb3e67f348907&auto=format&fit=crop&w=1950&q=80'
    ],
    headline: 'Your Business, Evolved'
)

image_carousel3 = ImageCarousel.create!(
    location: 'services',
    urls: [
        'https://images.unsplash.com/photo-1518557743312-e86ea8b29b3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a889fdfafc4123f38dabc056e8ba8b3b&auto=format&fit=crop&w=1955&q=80',
        'https://images.unsplash.com/photo-1504438652155-a421a09f1f1c?ixlib=rb-0.3.5&s=8051aaffbf40f1ecda174e95d5d7f90c&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1521508567009-a6d821b3db22?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f59eacb18a82d459d9be6ce4d81c8fa6&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1519458861917-ec46e733681b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e87a6e62cf9d86971837469c3e44a26a&auto=format&fit=crop&w=1950&q=80'
    ],
    headline: 'Providing Services To Your Business'
)

image_carousel4 = ImageCarousel.create!(
    location: 'contact',
    urls: [
        'https://images.unsplash.com/photo-1505210069911-a8e20f39ae6f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5889fa8316c30ec614bfeeadaf9f1fe2&auto=format&fit=crop&w=963&q=80',
        'https://images.unsplash.com/photo-1506277450472-30e3f3f55129?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1d9511266a5133052e7a7778f856171&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1492104387331-206462f14a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=669f876b55701abd081133e601502ab3&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1504890283869-c3de3cea0c59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea9ddbbfc4a373c1b0f92a50cd68e4d2&auto=format&fit=crop&w=1950&q=80'
    ],
    headline: 'Get in touch'
)

AdminUser.create!(email: 'rsmease@gmail.com', password: 'password', password_confirmation: 'password') if Rails.env.development?