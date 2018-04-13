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

service1 = Service.create!(
    name: 'Draw A Roadmap',
    short_description: 'Together, we work with you to build your plan for the next year—or five!',
    long_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet porttitor tortor. Maecenas mollis rhoncus lacus sed vehicula. Duis laoreet fermentum ex, nec scelerisque mauris cursus ac. Mauris vel euismod quam. Etiam auctor sapien cursus enim feugiat mattis. Aenean ac orci sit amet metus porta feugiat euismod in ligula. Curabitur sagittis rhoncus purus vitae feugiat. Cras volutpat id eros sit amet lobortis. Etiam sollicitudin lacus quis mauris mattis, nec aliquam nulla scelerisque. Curabitur lacinia at diam tincidunt porta. Duis eu facilisis erat, eget porta nunc.'
)

service2 = Service.create!(
    name: 'Define Values',
    short_description: 'We define the values for your company',
    long_description: 'Proin blandit quam eros, nec mollis nibh scelerisque sed. Vestibulum auctor condimentum dolor nec pharetra. Aenean tempor mattis feugiat. Nunc dictum tincidunt velit, id faucibus lorem hendrerit id. Maecenas sed mollis sem, ac suscipit nisl. Nam placerat nulla vitae massa finibus hendrerit. Suspendisse semper risus augue, non efficitur diam tincidunt ullamcorper. Maecenas cursus ac massa quis elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quam arcu, convallis at sollicitudin id, luctus eget dolor. Nunc quis venenatis velit, ut maximus ligula. Donec ultricies ut erat sit amet lacinia.'
)

service3 = Service.create!(
    name: 'Find Tools',
    short_description: 'We work to identify tools that will save you time and money',
    long_description: 'Fusce pretium, sem a ullamcorper auctor, velit magna vestibulum turpis, ut posuere mi ex a libero. Sed molestie venenatis turpis, non luctus erat porta id. Nullam sed orci et dolor hendrerit rhoncus sit amet in nisi. Morbi nunc dui, bibendum vel erat sed, lacinia mattis metus. Nam volutpat efficitur sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eget ex pulvinar, euismod quam id, imperdiet libero. Nunc a aliquam sapien. Sed at vehicula urna, vel tincidunt sapien. Morbi velit nibh, ornare sed leo quis, sollicitudin cursus nisi. Nulla condimentum ante quis orci ornare laoreet. Sed lobortis felis leo, nec condimentum risus dignissim a.'
)

service4 = Service.create!(
    name: 'Build A Community',
    short_description: 'We leverage social media to find you a community of supporters',
    long_description: 'Phasellus at semper sapien. Nam efficitur venenatis tortor, at convallis neque pharetra id. Ut a sapien ac velit condimentum dignissim. Donec sollicitudin consequat pulvinar. Etiam rhoncus ex id pharetra laoreet. In vehicula est a purus pulvinar, eu vulputate elit scelerisque. Nullam eu maximus felis, et vulputate massa. Duis faucibus sagittis est, vel rhoncus nulla ornare ut. Sed pellentesque orci ac arcu vulputate, eget venenatis nisl hendrerit. Integer quis metus id sem porttitor pharetra. Nunc euismod arcu a lobortis laoreet. Praesent pretium tristique odio at viverra. In in lectus sed ante posuere molestie. Suspendisse pretium rutrum mi, in tempor ex tristique laoreet. Donec vel nibh ullamcorper, auctor nisi quis, feugiat nisi.'
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
    headshot_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/630px-Blank_woman_placeholder.svg.png'
)