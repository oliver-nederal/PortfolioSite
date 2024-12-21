import React from 'react';
import {
    ReactOriginal,
    NextjsOriginal,
    JavascriptOriginal,
    TypescriptOriginal,
    TailwindcssOriginal,
    NodejsOriginal,
    ExpressOriginal,
    MysqlOriginal,
    PythonOriginal,
    PrismaOriginal,
    BlenderOriginal,
    PostgresqlOriginal,
    GithubOriginal,
    GithubactionsOriginal
} from 'devicons-react';

type IconProps = { size?: string | number; className?: string };

const SkillCard = ({ Icon, name }: { Icon: React.FunctionComponent<IconProps>; name: string }) => (
    <div className="bg-white dark:bg-[#1d1d1c] aspect-square border dark:border-gray-800 rounded-lg flex flex-col items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Icon size={80} />
        <h2 className="text-lg mt-4 text-gray-800 dark:text-gray-100 text-center">{name}</h2>
    </div>
);

const SKILL_CATEGORIES = [
    {
        title: 'Frontend',
        skills: [
            { Icon: ReactOriginal, name: 'React' },
            { Icon: JavascriptOriginal, name: 'JavaScript' },
            { Icon: TypescriptOriginal, name: 'TypeScript' },
            { Icon: NextjsOriginal, name: 'NextJS' },
            { Icon: TailwindcssOriginal, name: 'Tailwind' }
        ]
    },
    {
        title: 'Backend',
        skills: [
            { Icon: NodejsOriginal, name: 'NodeJS' },
            { Icon: ExpressOriginal, name: 'ExpressJS' },
            { Icon: PythonOriginal, name: 'Python' },
            { Icon: MysqlOriginal, name: 'MySQL' },
            { Icon: PostgresqlOriginal, name: 'PostgreSQL' },
            { Icon: PrismaOriginal, name: 'Prisma' }
        ]
    },
    {
        title: 'Other',
        skills: [
            { Icon: BlenderOriginal, name: 'Blender' },
            { Icon: GithubOriginal, name: 'GitHub VC' },
            { Icon: GithubactionsOriginal, name: 'GitHub Actions' }
        ]
    }
];

export default function Skills() {
    return (
        <div className="pt-[100px] pb-[40px] px-[20px] min-h-screen w-full h-full">
            <div className="transition-all ease-in-out w-full grid md:grid-cols-2 gap-8">
                {SKILL_CATEGORIES.map((category, index) => (
                    <section key={index} className="w-full">
                        <h1 className="font-bold text-2xl mb-4 text-black dark:text-white">{category.title}</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all ease-in-out">
                            {category.skills.map((skill, skillIndex) => (
                                <SkillCard key={skillIndex} Icon={skill.Icon} name={skill.name} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
